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

</style>