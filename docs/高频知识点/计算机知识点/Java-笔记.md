# Java笔记 

 2026-4-1

 原始笔记链接：https://cloud.seatable.cn/dtable/external-links/59b453a8639945478de2/

 
## 0708 java 面相对象案例


Java 案例

```java
// 一键控制所有加点的状态
class Light {
  public void on() {
    System.out.printLn('Open light');
  }
  public void off() {
    System.out.printLn('Close light');
  }
}

class Television {
  public void on() {
    System.out.printLn('Open TV');
  }
  public void off() {
    System.out.printLn('Close TV');
  }
}

class Airconditioner {
  public void on() {
    System.out.printLn('Open Air');
  }
  public void off() {
    System.out.printLn('Close Air');
  }
}

// 外观
class Facade {
  Light light;
  Television television;
  Aircondition aircondition;

  // 传参 
  public Facade(Light light, Television television, Airconditioner airconditioner) {
    this.light = light;
    this.television = television;
    this.airconditioner = airconditioner;
  }

  public void on() {
    light.on();
    television.on();
    aircondition.on();
  }

  public void off() {
    light.off();
    television.off();
    aircondition.off();
  }
}

class FacadePattern {
  public static void main(String[] args) {
    // 实例化电器类
    Light light = new Light();
    Television television = new Television();
    Airconditioner airconditioner = new Airconditioner();
    // 传参
    Facade facade = new Facade(light, television, airconditioner);
  }
}

```

​

   
## 0709 java 基本数据结构


数据结构	         特点	                                         适用场景

数组（Array）	固定大小，索引访问，类型一致	固定大小数据集，快速访问

列表（List）	动态大小，有序，允许重复	需要频繁添加、删除元素的数据集

集合（Set）	无序，不允许重复元素	快速查找，去重

映射（Map）	键值对，键唯一	映射关系的数据集，快速访问键对应的值

队列（Queue）FIFO 顺序处理元素	按顺序处理元素的场景

  