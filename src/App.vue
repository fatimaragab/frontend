<template>
  <router-view/>
</template>
<style>
* {
  box-sizing: border-box;
  padding: 0px;
}

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  height: 150%;
  width: 9%;
  padding: 20px;/* Should be removed. Only for demonstration */
}
.column2 {
  float: left;
  height: 95%;
  width: 91%;
  padding: 20px; /* Should be removed. Only for demonstration */
}
.column3{
  float: left;
  height: auto;
  width: auto;
  padding: 20px;
  column-gap: 60px;
  column-rule: 4px double;
}
.lastcol{
  float: left;
  height: 100px;
  width: 350px;
  padding: 20px;
  margin-right:60px;
  column-rule: 4px double;
}
.header{
  height: auto;
  width: auto;
}
.text{
  float: left;
  height: 150px;
  width: 350px;
  padding: 20px;
  color:#217074;
  border-radius: 30px 30px 30px 30px;
  margin: 10px;
}
/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
.glyphicon {
  font-size: 30px;
  padding: 35px;
  width: auto;
  color: #217074;
}
.today{
  background-color: transparent;
}
.time{
  padding: 15px;
  color: #217074;
}

#main {
  margin: auto;
  width: 400px;
}
.text2{
  float: left;
  height: 95%;
  width: 94%;
  color:#217074;
  margin: 25px;
  padding: 20px;
}

body{
  margin:0;
  min-width: 250px;
}
*{
  box-sizing: border-box;
}

Ul{
  margin:0;
  padding:0;
}

UI li{
  custor:pointer;
  position:relative;
  padding:12px 18px 12px 40px;
  list-style-type: none;
  background: #EDC5AB;
  font-size: 24px;
  transition: 0.2s;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

}

ul li:nth-child(odd){
  background: #E7EAEF;

}

ul li:hover{
  background: #ddd;
}

ul li.checked{

  background: #888;
  color:#fff;
  text-decoration: line-through;
}

ul li.checked::before{

  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top:10px;
  left:16px;
  transform: rotate(45deg);
  height:15px;
  width:7px;

}

.close{
  position: absolute;
  right:0;
  top:0;
  padding:12px 16px 12px 16px;
}

.close.hover{
  background-color: #EDC5AB;
  color:white;
}

.header{
  background-color: #217074;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

.header:after{
  content:"";
  display: table;
  clear: both;
}

.input{
  margin:0;
  border:none;
  border-radius: 0;
  width:75%;
  padding:10px;
  float:left;
  font-size: 18px;
}

.addBtn{
  padding:10px;
  width:25%;
  background: #EDC5AB;
  color: #555;
  float:left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
  border-radius:0;
}

.addBtn:hover{
  background-color: #bbb;
}

</style>