//You are given a sorted linked list containing unique values. You have to manipulate the linked list such that
 //the difference between every two adjacent node values should be exactly equal to 1. You can only insert some
 // extra between existing nodes in the linked list.

var fillGaps = function (head) {
    let curr=head;

    while(curr.next!=null){
       if(curr.data+1!==curr.next.data){
           let temp=new LinkedListNode(curr.data+1);
           temp.next=curr.next;
           curr.next=temp;
           
       }
       curr=curr.next
    }
    return head
};