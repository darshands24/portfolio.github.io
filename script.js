// =========typing animation========//
var typed=new Typed(".typing",{
    strings:["","Software Engineer","","Web Developer","","Software Developer","","Web Designer","","Coder",""],
    typeSpeed:200,
    BackSpeed:60,
    loop:true
})
// ================aside=======
const nav=document.querySelector(".nav"),
    navList=nav.querySelectorAll("li"),
    totalNavList=navList.length,
    allSelection=document.querySelectorAll(".section"),
    totalSelection=allSelection.length;
    for(let i=0; i<totalNavList; i++)
    {
        const a=navList[i].querySelector("a");
        a.addEventListener("click",function()
        {
            removeBacksection();
            for(let j=0;j<totalNavList;j++)
            {
                if(navList[j].querySelector("a").classList.contains("active"))
                {
                    addBacksection(j);
                    //allSelection[j].classList.add("back-section");
                    // console.log("back-section"+navList[j].querySelector("a"))
                }
                navList[j].querySelector("a").classList.remove("active");
            }
            this.classList.add("active");
            showSelection(this);

            if(window.innerWidth < 1200)
            {
                asideSectionTogglerBtn();
            }
        })
    }

    function showSelection(element)
    {
        for(let i=0;i<totalSelection;i++)
        {
            allSelection[i].classList.remove("active");
        }
        const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#" +target).classList.add("active")
    }

    function removeBacksection()
    {
        for(let i=0;i<totalSelection;i++)
            {
                allSelection[i].classList.remove("back-section");
            }
    }
    function addBacksection(num)
    {
        allSelection[num].classList.add("back-section");
    }


    
    function updateNav(element)
    {
        // console.log(element.getAttribute("href").split("#")[1])
        for(let i=0;i<totalNavList;i++)
        {
            navList[i].querySelector("a").classList.remove("active");
            const target=element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
                navList[i].querySelector("a").classList.add("active");
            }
        }
    }

    document.querySelector(".hire-me").addEventListener("click",function()
    {
        // console.log(this);
        const sectionIndex=this.getAttribute("data-section-index");
        // console.log(sectionIndex);
        showSelection(this);
        updateNav(this);
        removeBacksection();
        addBacksection(sectionIndex);
    })

    const navTogglerBtn=document.querySelector(".nav-toggler"),
        aside=document.querySelector(".aside");
        navTogglerBtn.addEventListener("click",()=>
        {
            asideSectionTogglerBtn();
        })

        function asideSectionTogglerBtn()
        {
            aside.classList.toggle("open");
            navTogglerBtn.classList.toggle("open");

            for(let i=0;i<totalSelection;i++)
            {
                allSelection[i].classList.toggle("open");
            }
        }
        
// for download resume button----------------------------
function confirmDownload(event) {
    event.preventDefault(); // Prevent the default link behavior
    var userConfirmed = confirm("Do you want to download Darshan CV?");
    if (userConfirmed) {
        window.location.href = "https://drive.google.com/uc?export=download&id=1BrM93ahCAgem0eiJBWltQKIXK3DUg6mQ";
    }
}

// To View project--------------------------
// ----smart cap---------------
function confirmRedirect(url) {
    var userConfirmed = confirm("Do you want to view the project on GitHub?");
    if (userConfirmed) {
        window.open(url, '_blank');
    }
}


