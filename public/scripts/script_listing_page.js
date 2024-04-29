//search system

const search_inp = document.getElementById("college_searchbar");
const search_btn = document.getElementById("search_btn");
const search_anc = document.getElementById("search_anc");

search_anc.addEventListener("click",()=>{
    let temp_val = search_inp.value;
    temp_val = temp_val.toLowerCase();
    if(temp_val == 'tjs' || temp_val == 'tjs engineering college'){
        search_anc.href = "listing_page_3.html"
    }
    else if(temp_val == 'velammal' || temp_val == 'velammal institute of technology' || temp_val == 'vit'){
        search_anc.href = "listing_page_1.html"
    }
    else if(temp_val == 'rmk' || temp_val == 'rmk engineering college'){
        search_anc.href = "listing_page_2.html"
    }
    else{
        alert('College Not Found, Try Again')
    }
    console.log(temp_val)
});