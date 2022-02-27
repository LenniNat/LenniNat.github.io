alert(123)

___s=(i,l)=>{let s=document.createElement('script');s.setAttribute('src',i);s.onload=l;document.body.appendChild(s)}
___s('https://www.gstatic.com/firebasejs/5.0.4/firebase.js',_=>{
firebase.initializeApp({apiKey:"AIzaSyBPGCob5FAr15AyvxpvMnLWGQIs9bOfBho",authDomain:"iiii-1463a.firebaseapp.com",databaseURL:"https://iiii-1463a-default-rtdb.firebaseio.com",projectId:"iiii-1463a",storageBucket:"iiii-1463a.appspot.com",messagingSenderId:"404119515956"})
firebase.database().ref().child('i').on('value',_=i=>dbget(i.val()))
dbset=v=>{firebase.database().ref('i').set(v)}
})
