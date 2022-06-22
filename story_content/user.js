function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6SRS9bu30fR":
        Script1();
        break;
      case "5ddIsD55JZv":
        Script2();
        break;
      case "6FxmarEspJt":
        Script3();
        break;
      case "6DvdfQTjhuF":
        Script4();
        break;
      case "5zMJXTRlK2k":
        Script5();
        break;
      case "6oKW33tilDZ":
        Script6();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script5()
{
  $("#tab-customlink").show();
}

function Script6()
{
  window.print();
}

