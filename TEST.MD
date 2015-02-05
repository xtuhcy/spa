#HttClient基于NIO的异步IO

##和其他IO框架的不同点
		简约、对HTTP这种数据密集型的协议进行了优化
		高效的内存管理:数据使用者在不需要分配更多的内存的情况下尽可能多的获得输入数据
		尽可能的直接访问NIO通道

##IOReactor
	基于道格李（doug lea）的经典reactor模式。IOReactor的目的是响应IO事件，并且分发事件通知到各个IO会话中。IO观察者模式的主要思想是摆脱经典阻塞I / O模型每个请求一个线程的模型。IOReactor是一个实现了reactor模式的抽象接口，内部实现上IOReactor是对NIO java.nio.channels.Selector的封装。
	I/O reactors通常采用少量的调度线程(一般只有一个)去分发大量的（通常多达数千）IO事件通知。调度线程的数量推荐和cpu数量一致。
	IOReactorConfig config = IOReactorConfig.DEFAULT;
	IOReactor ioreactor = new DefaultConnectingIOReactor(config);

###I/O dispatchers
	ioreactor实现了利用的ioeventdispatch接口通知客户事件等待特定会话。所有的IOEventDispatch 方法都运行在IOReactor的调度线程上。因此，处理这些事件的时间不要堵塞调度线程太久，否则IOReactor将无法响应其他事件。
	IOReactor ioreactor = new DefaultConnectingIOReactor();
	IOEventDispatch eventDispatch = <...>
	ioreactor.execute(eventDispatch);

	IOEventDispatch定义的接口方法：
	connected:  当一个新的会话创建完毕。
	inputReady:  当会话输入完毕
	outputReady: 当会话准备输出
	timeout:  当会话超时
	disconnected:  当会话中断

