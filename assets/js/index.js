$(function() {
  //access all 'our services' tabs
  const tabs = $(".serv-tab");
  //access all 'our services' contents
  const contents = $(".servs-content");
  //hide all contents
  $(contents).hide();
  //display first content of active tab (tab which has active class)
  $(contents[0]).show();
  //set event handler for every tabs
  tabs.click(e => {
    //remove active class from previous and set it to clicked tab
    $(".active-tab").removeClass("active-tab");
    $(e.target).addClass("active-tab");
    //hide content of previous tab
    $(contents).hide();
    //display content of clicked tab
    $(contents[$(e.target).index()]).css({
      display: "flex",
      width: "840px",
      height: "140px"
    });
  });
});

$(function() {
  //access all 'our amazing works' tabs
  const worksTabs = $(".work-tab");
  //access all "Our works" images
  const worksImgs = $(".works-imgs");
  //access 'load more' button
  const loadMore = $(".loadBtn");

  let i = 0;

  $(window).scroll(function() {
    //get heights of every sections and calculate vertical position of target
    const viewPortSize = $(window).height();
    const headerHeihgt = $(".header").height();
    const fourTabsHeight = $(".four-tabs").height();
    const servsSecHeight = $(".servs-section").height();
    const appAdvHeight = $(".appAdv").height();
    const ourworksSecHeight = $(".our-works-section").height();
    let topHeighttoTarget =
      headerHeihgt +
      fourTabsHeight +
      servsSecHeight +
      appAdvHeight +
      ourworksSecHeight;
    let triggerAt = 150;
    let triggerHeight = topHeighttoTarget - viewPortSize + triggerAt;
    //fadeIn target when it is in viewport
    $(".works-section").hide();
    if ($(window).scrollTop() >= triggerHeight) {
      $(".works-section")
        .hide()
        .fadeIn(1500);
      $(this).off("scroll");
    }
  });

  //hide all "Our works images"
  $(worksImgs).hide();
  //show 12 imges of "Our works"
  for (i; i < 12; i++) {
    $(worksImgs[i]).fadeIn("slow");
  }

  const showMore = () => {
    if (i == 12) {
      for (i; i < 24; i++) {
        $(worksImgs[i]).fadeIn(100);
      }
    } else {
      for (i; i < 36; i++) {
        $(loadMore).fadeOut();
        $(worksImgs[i]).fadeIn(100);
      }
    }
  };

  //access "Our works" contaier
  let worksContainer = $(".works-wrapper");

  const show = () => {
    //get height of "Our Works" container and its images
    let worksContainerHeight = $(".works-wrapper").height();
    let worksImgHeight = $(".works-imgs").height();
    let worksImgsCount = worksImgs.length;
    let worksImgsRowCount = worksImgsCount / 4;
    let displayedRowsCount = worksContainerHeight / worksImgHeight;
    //set animation for eventHandler of loadMore button
    if (worksImgsRowCount > displayedRowsCount) {
      $(worksContainer).animate({
        height: worksContainerHeight + worksImgHeight * 3
      });
      // setTimeout(showMore, 100);
      showMore();
      // $(loadMore).css("display", "inline-block");
    }
  };
  //set eventHandler for loadMore button
  loadMore.on("click", show);

  //access  "Our amazing works" tabs
  let allWorksTab = $(".work-tab");
  let allTab = $(".allT");
  let graphsTab = $(".graphT");
  let webTab = $(".webT");
  let pagesTab = $(".pagesT");
  let wordpressTab = $(".wordpressT");

  //add eventHandler for "All" tab
  allTab.click(() => {
    allWorksTab.removeClass("active-work--tab");
    allTab.addClass("active-work--tab");
    i = 0;
    //set active tab
    //hide all "Our works images"
    $(worksImgs).hide();
    $(worksContainer).css("height", "541px");
    //show 12 images of "Our works"
    for (i; i < 12; i++) {
      $(worksImgs[i]).fadeIn("slow");
    }
    $(loadMore).fadeIn();
  });

  //add eventHandler for "Graphic Design" tab
  graphsTab.click(() => {
    allWorksTab.removeClass("active-work--tab");
    graphsTab.addClass("active-work--tab");
    //hide all "Our works images"
    $(worksImgs).hide();
    $(worksContainer).css("height", "541px");
    $(".graphImg").fadeIn("slow");
    $(loadMore).fadeOut();
  });

  //add eventHandler for "Web Design" tab
  webTab.click(() => {
    allWorksTab.removeClass("active-work--tab");
    webTab.addClass("active-work--tab");
    //hide all "Our works images"
    $(worksImgs).hide();
    $(worksContainer).css("height", "541px");
    $(".webImg").fadeIn("slow");
    $(loadMore).fadeOut();
  });

  //add eventHandler for "Pages" tab
  pagesTab.click(() => {
    allWorksTab.removeClass("active-work--tab");
    pagesTab.addClass("active-work--tab");
    //hide all "Our works images"
    $(worksImgs).hide();
    $(worksContainer).css("height", "541px");
    $(".pagesImg").fadeIn("slow");
    $(loadMore).fadeOut();
  });

  //add eventHandler for "Wordpress" tab
  wordpressTab.click(() => {
    allWorksTab.removeClass("active-work--tab");
    wordpressTab.addClass("active-work--tab");
    //hide all "Our works images"
    $(worksImgs).hide();
    $(worksContainer).css("height", "541px");
    $(".wordpressImg").fadeIn("slow");
    $(loadMore).fadeOut();
  });
});
