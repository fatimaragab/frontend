<template>
  <div className="home">
    <div className="column" style="background-color:#E7EAEF;">
      <img src="@/assets/calender-day-love-svgrepo-com.svg" alt="logo" height="80px" width="80px">
      <br> <br> <br> <br> <br> <br><br> <br> <br> <br>
      <span className="glyphicon glyphicon-calendar icon"></span>
      <br>
      <span className="glyphicon glyphicon-check"></span>
      <br>
      <span className="glyphicon glyphicon-cog active"></span>
      <br> <br><br> <br> <br> <br> <br> <br><br><br> <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>
      <div>
        <h1 style="color:#217074;">11:00 </h1>
        <br>
        <h1 style="color:#217074;">NOV 30 </h1>
      </div>
    </div>
    <div className="column2" style="background-color: #EDC5AB">
      <div className="header" style="background-color: #EDC5AB">
        <h3 style="color:#E7EAEF;"> &nbsp;&nbsp;30 NOV &nbsp; &nbsp;<u>Today</u> &nbsp; &nbsp; 2 Dec &nbsp; |&nbsp;
          <span>&#183;</span><span>&#183;</span><span>&#183;</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Categories:3/4
          <span className="glyphicon glyphicon-circle-arrow-left"></span> <span
              className="glyphicon glyphicon-circle-arrow-right"></span></h3>
      </div>
      <div className="column3" style="background-color: #EDC5AB">
        <h2 style="color:#217074;">Work & School &nbsp; &nbsp; <span>&#183;</span><span>&#183;</span><span>&#183;</span>
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </h2>
        <br><br>
        <div className="text" style="background-color: #fff">
          <h4>Programming lecture</h4>
          <h7 style="color:lightslategrey;"> School</h7>
          <h5>12:00-13:00</h5>
        </div>
        <br>
        <div className="text" style="background-color: #fff">
          <h4>Meeting with client</h4>
          <h7 style="color:lightslategrey;"> Work</h7>
          <h5>15:00-16:00</h5>
        </div>
        <br>
        <p style="color: lightslategrey;">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;------------------------DONE------------------------</p>
        <div className="text" style="background-color: #fff">
          <h4>Go to the doctor</h4>
          <h7 style="color:lightslategrey;"> dentist</h7>
          <h5>16:00-16:30</h5>
        </div>
      </div>
      <div className="column3" style="background-color: #EDC5AB">
        <h3 style="color:#217074;"> Home &nbsp; &nbsp; <span>&#183;</span><span>&#183;</span><span>&#183;</span>&nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;</h3>
        <br><br>
        <div className="text" style="background-color: #fff">
          <h4>Grocery shopping</h4>
          <h7 style="color:lightslategrey;"> check shopping list</h7>
          <h5>17:00-18:00</h5>
        </div>
        <br>
        <div className="text" style="background-color: #fff">
          <h4>Dinner</h4>
          <h7 style="color:lightslategrey;"> check menu</h7>
          <h5>18:00-18:15</h5>
        </div>
        <br>
        <div className="text" style="background-color: #fff">
          <h4>Walk the dog</h4>
          <h5>18:15-18:30</h5>
        </div>
      </div>
      <div className="column3" style="background-color: #EDC5AB">
        <h3 style="color:#217074;"> Others &nbsp; &nbsp; <span>&#183;</span><span>&#183;</span><span>&#183;</span></h3>
        <br><br>
        <div className="text" style="background-color: #fff">
          <h4>Meeting with friends</h4>
          <h7 style="color:lightslategrey;"> at the park</h7>
          <h5>19:00-22:00</h5>
        </div>
        <br>
        <div className="text" style="background-color: #fff">
          <h4>Give Camera Back</h4>
          <h7 style="color:lightslategrey;"> to john</h7>
          <h5>until 10</h5>
        </div>
      </div>
      <div className="column3" style="background-color: #EDC5AB">
        <div className="lastcol" style="background-color: #EDC5AB">
          <br>
          <p style="color: lightslategrey;">----`----------------------------------------------------</p>
          <br>
          <h4>Completed: 1/3
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a
                href="SecPage" className="btn btn-primary" role="button">Add Task</a></h4>
        </div>
        <div className="lastcol" style="background-color: #EDC5AB">
          <br>
          <p style="color: lightslategrey;">--------------------------------------------------------</p>
          <br>

          <h4>Completed:
            0/3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a
                href="SecPage" className="btn btn-primary" role="button">Add Task</a></h4>
        </div>
        <div className="lastcol" style="background-color: #EDC5AB">
          <br>
          <p style="color: lightslategrey;">--------------------------------------------------------</p>
          <br>
          <h4>Completed:
            0/2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a
                href="SecPage" className="btn btn-primary" role="button">Add Task</a></h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'HomeView',
  data() {
    return {
      HomeView: []
    }

  },
  mounted() {
    const endpoint = process.env.VUE_APP_BACKEND_BASE_URL + '/api/v1/ToDoList'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }

    fetch(endpoint, requestOptions)
        .then(response => response.json())
        .then(result => result.forEach(HomeView => {
          this.Homeview.push(tasks)
        }))
        .catch(error => console.log('error', error))

  }

}
</script>