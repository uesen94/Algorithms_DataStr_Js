class Node {
  constructor(data) {
    this.data = data;  // Düğümün içindeki veriyi temsil eden bir data alanı
    this.next = null; // Bir sonraki düğümü işaret eden bir next bağlantısı
  }
}

class LinkedList {
  constructor() {
    this.head = null; // Linked list'in başını temsil eder.
  }

//Adding Node to the linkedList
   add(data) {
      const newNode = new Node(data); // Yeni bir düğüm oluşturulur
  
      if (this.head === null) {
        this.head = newNode; // Eğer linked list boşsa, yeni düğümü baş olarak atarız
      } else {
        let current = this.head;
        while (current.next !== null) {
          current = current.next; // linked list'in son düğümüne ilerleriz
        }
        current.next = newNode; // Son düğümün next bağlantısını yeni düğüme yönlendiririz
      }
    }
  
  //Inserting a Node
  insert(data, position) {
    const newNode = new Node(data);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;
      while (index < position && current !== null) {
        previous = current;
        current = current.next;
        index++;
      }
      if (current === null) {
        previous.next = newNode;
      } else {
        newNode.next = current;
        previous.next = newNode;
      }
    }
  }
  
  //Removing a Node
  remove(positionRemove) {
    if (positionRemove === 0) {
      if (this.head !== null) {
        this.head = this.head.next;
      }
    } else {
      let current = this.head;
      let previous = null;
      let index = 0;
      while (index < positionRemove && current !== null) {
        previous = current;
        current = current.next;
        index++;
      }
      if (current !== null) {
        previous.next = current.next;
      }
    }
  }

  //Implementing Search Algorithm
  search(key){
    let current=this.head;
    let index=0;
    while (current.next !== null) {
     if (current.data === key) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  print() {
    let current = this.head; // Başlangıçta linked list'in başını current olarak atarız
    while (current !== null) {
      console.log(current.data); // Veriyi yazdırırız
      current = current.next; // Bir sonraki düğüme ilerleriz
    }
  }
}

  // Kullanım örneği
  const linkedList = new LinkedList();
  linkedList.add(10);
  linkedList.add(20);
  linkedList.add(30);
  console.log("Before insertion:");
  linkedList.print(); // 10 20 30 çıktısını verir
  
  const newData = 15;
  const position = 1;
  linkedList.insert(newData, position);
  
  console.log("After insertion:");
  linkedList.print(); // 10 15 20 30
  
  const positionRemove=2;
  linkedList.remove(positionRemove);
  console.log("After removal:");
  linkedList.print(); // 10 15 30
  
  const key = 20;
  const result = linkedList.search(key);
  if (result !== -1) {
    console.log(`The key ${key} is found at index ${result}.`);
  } else {
    console.log(`The key ${key} is not found in the list.`);
  }

