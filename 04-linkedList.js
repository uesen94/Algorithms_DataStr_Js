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
linkedList.print(); // 10 20 30 çıktısını verir

