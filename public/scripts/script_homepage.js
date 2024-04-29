const burg_icon = document.getElementById("burg_icon");
const selbtnm = document.getElementById("sellbtnm");
const logoutbtn = document.getElementById("logoutbtn");
let mobile_toggler = 0;
burg_icon.addEventListener("click",()=>{ 
    if(mobile_toggler === 0){
        selbtnm.classList.remove("secondary-btn-h")
        selbtnm.classList.add("secondary-btn-s")
        logoutbtn.classList.remove("secondary-btn-h")
        logoutbtn.classList.add("secondary-btn-s")
        mobile_toggler = 1;
    }
    else{
        selbtnm.classList.remove("secondary-btn-s")
        selbtnm.classList.add("secondary-btn-h")
        logoutbtn.classList.remove("secondary-btn-s")
        logoutbtn.classList.add("secondary-btn-h")
        mobile_toggler = 0;
    }
});

// desktop logout
const logoutbtnd = document.getElementById("logoutbtnd");
const probtn = document.getElementById("profilebtn");
let desk_toggler = 0;
probtn.addEventListener("click",()=>{
    if(desk_toggler === 0){
        logoutbtnd.classList.remove("secondary-btn-h")
        logoutbtnd.classList.add("secondary-btn-s")
        desk_toggler = 1;
    }
    else{
        logoutbtnd.classList.remove("secondary-btn-s")
        logoutbtnd.classList.add("secondary-btn-h")
        desk_toggler = 0;
    }
})

//search systems

const search_inp = document.getElementById("college_searchbar");
const search_btn = document.getElementById("search_btn");
const search_anc = document.getElementById("search_anc");

search_anc.addEventListener("click",()=>{
    let temp_val = search_inp.value;
    temp_val = temp_val.toLowerCase();
    if(temp_val == 'tjs' || temp_val == 'tjs engineering college' || temp_val == 't.j.s engineering college'){
        search_anc.href = "listing_page_3.html"
    }
    else if(temp_val == 'velammal' || temp_val == 'velammal institute of technology' || temp_val == 'vit'){
        search_anc.href = "listing_page_1.html"
    }
    else if(temp_val == 'rmk' || temp_val == 'rmk engineering college' || temp_val == 'r.m.k engineering college'){
        search_anc.href = "listing_page_2.html"
    }
    else{
        alert('College Not Found, Try Again')
    }
    console.log(temp_val)
});
