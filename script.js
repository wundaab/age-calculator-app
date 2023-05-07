b_d = 9;
b_m = 6;
b_y = 2022;

t_d = 7;
t_m = 5;
t_y = 2023;

var d=0, m=0, y=0;

y= t_y - b_y;

if(b_m > t_m){
    y = y - 1;
    m = 12 - (b_m - t_m);
}
else{
    m = t_m - b_m;
}

if(b_d > t_d){
    m = m - 1;
    d = 30 - (b_d - t_d);
}
else{
    d = t_d - b_d;
}

console.log(y + " years " + m + " months " + d + " days");
