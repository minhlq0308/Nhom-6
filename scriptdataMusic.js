fetch("dataMusic.json")
.then(function(response){
   return response.json();
})
.then(function(products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
         <tr>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.author}</td>
            <td>${product.time}</td>
            <td>${product.album}</td>
            <td>${product.countListen}</td>
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
});