$(document).ready(function () {
  let opened = false;

  $(".heart").click(function () {
    if (!opened) {
      $(".message").removeClass("closed closeNor").addClass("openNor");
      $(".heart").removeClass("closeHer").addClass("openHer");
      opened = true;
    } else {
      $(".message").removeClass("openNor").addClass("closeNor");
      $(".heart").removeClass("openHer").addClass("closeHer");
      opened = false;
    }
  });
});
