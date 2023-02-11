
$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        var season = $(this).attr("href");//contents of href attribute of this element
        // alert(season);


        //make the season lower case
        season = season.toLowerCase();

        switch(season){
            case "spring":
                $("#logo").attr("src", "images/spring.gif");
                $("#wear").attr("src", "images/spring-wear.jpg");
                $("html").css("background-color", "#2B7129");
                $("#myHeader h3").text("Leap into our Spring Wear!");

            break;

            case "summer":
                $("#logo").attr("src", "images/summer.gif");
                $("#wear").attr("src", "images/summer-wear.jpg");
                $("html").css("background-color", "#EBA52B");
                $("#myHeader h3").text("Leap into our Summer Wear!");

            break;

            case "fall":
                $("#logo").attr("src", "images/fall.gif");
                $("#wear").attr("src", "images/fall-wear.jpg");
                $("html").css("background-color", "#A81124");
                $("#myHeader h3").text("Leap into our Fall Wear!");
    
                break;

                case "winter":
                    $("#logo").attr("src", "images/winter.gif");
                    $("#wear").attr("src", "images/winter-wear.jpg");
                    $("html").css("background-color", "#005393");
                    $("#myHeader h3").text("Leap into our Winter Wear!");
        
                    break;

                 default:
                    $("#logo").attr("src", "images/four-seasons.gif");
                    $("#wear").attr("src", "images/300x400.png");
                    $("html").css("background-color", "#ccc");
                    $("#myHeader h3").text("Outfitter for all seasons!");



        }
    });
});
