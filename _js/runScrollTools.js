export default function runScrollTools(){
    console.log('jestem w scrollu')
    // init controller
    const controller = new ScrollMagic.Controller();

    let tween = TweenLite.to(".js-intro-tools .js-tools-container", 5.5, {backgroundColor: "green"});

    // create a scene
    let scene = new ScrollMagic.Scene({
            duration: 100,
            offset: 350
        })
        .addTo(controller) // assign the scene to the controller
        .setTween(tween)
        .setPin(".js-intro-tools .js-tools-container"); // pins the element for the the scene's duration
};
