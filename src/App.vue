<template>
  <router-view />
</template>
<style>
* {
  box-sizing: border-box;
  padding: 0px;
}

/* Create two equal columns that floats next to each other */
.column {
  float: left;
  height: 130%;
  width: 9%;
  padding: 20px;
  /* Should be removed. Only for demonstration */
}

.column2 {
  float: left;
  height: 130%;
  width: 91%;
  padding: 20px;
  /* Should be removed. Only for demonstration */
}

.column3 {
  float: left;
  height: auto;
  width: auto;
  padding: 20px;
  column-gap: 60px;
  column-rule: 4px double;
}

.lastcol {
  float: left;
  height: 100px;
  width: 350px;
  padding: 20px;
  margin-right: 60px;
  column-rule: 4px double;
}

.header {
  height: auto;
  width: auto;
}

.text {
  float: left;
  height: 420px;
  width: 360px;
  padding: 20px;
  color: #217074;
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

.today {
  background-color: transparent;
}

.time {
  padding: 15px;
  color: #217074;
}

#main {
  margin: auto;
  width: 400px;
}

.text2 {
  float: left;
  height: 95%;
  width: 94%;
  color: #217074;
  margin: 25px;
  padding: 20px;
}

body {
  margin: 0;
  min-width: 250px;
}

* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  padding: 0 !important;

  border-radius: 4px;
  overflow: hidden;
}

/* ul li span[contenteditable="true"] {
  right: 2px;

  border: 2px solid #eee;
} */

ul li:not(:first-child) {
  border-top: 1px solid #ced2d6;
}

ul li {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  height: 60px;
  list-style-type: none;
  background: #E7EAEF;
  font-size: 24px;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;

}

ul li span {
  position: relative;

  margin-right: auto;

  border-radius: 4px;
}

ul li:hover {
  background: #ced2d6;
}

ul li.checked {

  background: #888;
  color: #fff;
}

ul li.checked span {

  text-decoration: line-through;
}

ul li.checked::before {

  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;

}

ul li span {
  margin-left: 2rem;
}

.close {
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  aspect-ratio: 1;

  border: none;
  text-shadow: none;
  text-decoration: none;
}

.close.hover {
  background-color: #EDC5AB;
  color: white;
}

.header {
  background-color: #217074;
  padding: 30px 40px;
  color: white;
  text-align: center;
}

.header:after {
  content: "";
  display: table;
  clear: both;
}

.input {
  margin: 0;
  border: none;
  border-radius: 0;
  width: 100%;
  padding: 10px;
  float: left;
  font-size: 18px;
  color: #444;

  border: 2px solid rgba(0, 0, 0, 0.1);

  border-radius: 4px;
}

.addBtn {
  padding: 10px;
  width: 100%;
  background: #EDC5AB;
  color: #555;
  float: left;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  transition: 0.1s;
  border-radius: 4px;
  border: none;
  color: white;
  font-weight: bold;
  letter-spacing: 1px;
}
#clock {
  font-size: 175px;
  width: 900px;
  margin: 200px;
  text-align: center;
  border: 2px solid black;
  border-radius: 20px;
}
.addBtn[disabled] {

  background: #aaa;
  color: #888;

  cursor: not-allowed;
}

.addBtn:not([disabled]):hover {

  filter: brightness(1.05);
}

.todosContainer {
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  margin: auto;
  margin-top: 16rem
}

.formContainer {
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding-bottom: 3rem;
}
</style>