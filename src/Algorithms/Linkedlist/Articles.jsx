import React from "react";


const Articles = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1>Introduction to Linked List – Data Structure and Algorithm Tutorials</h1>
      <p><strong>Last Updated:</strong> 10 Sep, 2024</p>
      
      <h2>Table of Content</h2>
      <ul>
        <li><a href="#what-is-linked-list">What is a Linked List?</a></li>
        <li><a href="#terminologies">Basic Terminologies of Linked List</a></li>
        <li><a href="#importance">Importance of Linked List</a></li>
        <li><a href="#types">Types of Linked List</a>
          <ul>
            <li><a href="#singly-linked-list">Singly Linked List</a></li>
            <li><a href="#doubly-linked-list">Doubly Linked List</a></li>
            <li><a href="#circular-linked-list">Circular Linked List</a></li>
          </ul>
        </li>
        <li><a href="#implementation">Implementation of Linked List</a></li>
        <li><a href="#vs-array">Linked List vs. Array</a></li>
        <li><a href="#advantages">Advantages of Linked List</a></li>
        <li><a href="#disadvantages">Disadvantages of Linked List</a></li>
        <li><a href="#applications">Applications of Linked List</a></li>
        <li><a href="#faqs">Frequently Asked Questions (FAQs) about Linked List</a></li>
      </ul>

      <h3 id="what-is-linked-list">What is a Linked List?</h3>
      <p>Linked List is a linear data structure which looks like a series of nodes, where each node has two parts: data and next pointer. Unlike Arrays, Linked List elements are not stored at a contiguous location. In the linked list there is a head pointer, which points to the first element of the linked list, and if the list is empty then it simply points to null or nothing.</p>

      <h3 id="terminologies">Basic Terminologies of Linked List</h3>
      <ul>
        <li><strong>Head:</strong> The Head of a linked list is a pointer to the first node or reference of the first node of linked list. This pointer marks the beginning of the linked list.</li>
        <li><strong>Node:</strong> Linked List consists of a series of nodes where each node has two parts: data and next pointer.</li>
        <li><strong>Data:</strong> Data is the part of node which stores the information in the linked list.</li>
        <li><strong>Next pointer:</strong> Next pointer is the part of the node which points to the next node of the linked list.</li>
      </ul>

      <h3 id="importance">Importance of Linked List</h3>
      <ul>
        <li>Dynamic Data structure: The size of memory can be allocated or de-allocated at run time based on the operation insertion or deletion.</li>
        <li>Ease of Insertion/Deletion: The insertion and deletion of elements are simpler than arrays since no elements need to be shifted after insertion and deletion, Just the address needed to be updated.</li>
        <li>Efficient Memory Utilization: Linked List is a dynamic data structure, the size increases or decreases as per the requirement so this avoids the wastage of memory.</li>
      </ul>

      <h3 id="types">Types of Linked List</h3>
      <h4 id="singly-linked-list">1. Singly Linked List</h4>
      <p>Singly Linked List is a type of linked list where each node has two parts: data and next pointer. The next pointer of the last node stores null as it is the last node of the linked list and there is no next node.</p>

      <pre>
        {`// Singly linked list node in Java
class Node {
  int data;
  Node next;

  Node(int new_data) {
    data = new_data;
    next = null;
  }
}`}
      </pre>

      <h4 id="doubly-linked-list">2. Doubly Linked List</h4>
      <p>Doubly Linked List is a type of linked list where each node has three parts: data, next pointer, and previous pointer.</p>

      <pre>
        {`// Doubly linked list node in Java
class Node {
  int data;
  Node prev;
  Node next;

  Node(int new_data) {
    this.data = new_data;
    this.prev = null;
    this.next = null;
  }
}`}
      </pre>

      <h4 id="circular-linked-list">3. Circular Linked List</h4>
      <p>A circular linked list is a type of linked list in which the first and the last nodes are connected to each other to form a circle, there is no NULL at the end.</p>

      <h3 id="implementation">Implementation of Linked List</h3>
      <pre>
        {`// Java program to show the implementation of singly linked list
class Node {
  int data;
  Node next;

  Node(int new_data) {
    data = new_data;
    next = null;
  }
}

public class GfG {
  public static void printList(Node head) {
    while (head != null) {
      System.out.print(" " + head.data);
      head = head.next;
    }
    System.out.println();
  }

  public static void main(String[] args) {
    Node head = new Node(2);
    head.next = new Node(3);
    head.next.next = new Node(4);
    head.next.next.next = new Node(5);
    head.next.next.next.next = new Node(6);

    System.out.print("Linked List:");
    printList(head);
  }
}`}
      </pre>

      <h3 id="vs-array">Linked List vs. Array</h3>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Array</th>
            <th>Linked List</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stored in contiguous location.</td>
            <td>Not stored in contiguous location.</td>
          </tr>
          <tr>
            <td>Fixed size.</td>
            <td>Dynamic Size.</td>
          </tr>
          <tr>
            <td>Access in O(1) time.</td>
            <td>Access by traversing, O(N) time.</td>
          </tr>
        </tbody>
      </table>

      <h3 id="advantages">Advantages of Linked List</h3>
      <ul>
        <li>Dynamic nature</li>
        <li>Memory efficient</li>
        <li>Ease of Insertion and Deletion</li>
      </ul>

      <h3 id="disadvantages">Disadvantages of Linked List</h3>
      <ul>
        <li>Memory usage</li>
        <li>Random access not possible</li>
        <li>Search operation costly</li>
      </ul>

      <h3 id="applications">Applications of Linked List</h3>
      <ul>
        <li>Linear data structures such as stack, queue</li>
        <li>Dynamic memory allocation</li>
        <li>Implementation of graphs</li>
      </ul>

      <h3 id="faqs">Frequently Asked Questions (FAQs)</h3>
      <ul>
        <li><strong>What is linked list?</strong> A data structure with nodes.</li>
        <li><strong>Why is a linked list preferred over array?</strong> Dynamic, easy insertion/deletion.</li>
        <li><strong>Best use case?</strong> For dynamic data management and where frequent insertion/deletion is required.</li>
      </ul>
    </div>
  );
};

export default Articles;
