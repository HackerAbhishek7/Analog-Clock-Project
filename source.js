var dialines = document.getElementsByClassName('dialines');
        var clocke1 = document.getElementsByClassName('clock')[0];

        for(var i = 1;i<60 ; i++)
        {
            clocke1.innerHTML += "<div class='dialines'></div>";
            dialines[i].style.transform = "rotate(" + 6 * i + "deg)";
        }
        function clock()
        {
            var weekday = new array(7),
            d = new Date(),
            h = d.getHours(),
            m = d.getMinutes(),
            s = d.getSeconds(),
            date = d.getDate(),
            month = d.getMonth() + 1,
            year = d.getYear(),

            hDeg = h * 30 + m * (360/720),
            mDeg = m * 30 + s * (360/720),
            sDeg = s * 6,

            he1 = document.querySelector('.hour-hand'),
            me1= document.querySelector('.minute-hand'),
            se1 = document.querySelector('.second-hand'),
            datee1 = document.querySelector('.date'),
            daye1 = document.querySelector('.day');

            weekday[0]="Sunday";
            weekday[0]="Monday";
            weekday[0]="Tuesday";
            weekday[0]="Wednesday";
            weekday[0]="Thursday";
            weekday[0]="Friday";
            weekday[0]="Saturday";
            weekday[0]="Sunday";

            var day = weekday[d.getDay()];
            he1.style.transform = "rotate("+hDeg+"deg)";
            me1.style.transform = "rotate("+mDeg+"deg)";
            se1.style.transform = "rotate("+sDeg+"deg)";
            datee1.innerHTML= date+"/"+month+"/"+year;
            daye1.innerHTML=day;


        }
        setInterval("clock()",100);

