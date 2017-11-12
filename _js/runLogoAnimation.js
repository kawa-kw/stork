export default function runLogoAnimation(){

    // GSAP vars https://greensock.com/docs/#/HTML5/GSAP/TimelineLite/
    let tl = new TimelineLite();

    const $logoFull = $('#logo-full');
    const $saw = $('#saw-circle-big');
    const $storkName = $('#stork-name'); //całość
    const $stork = $('#stork'); //bocian
    const $work = $('#work > *');
    const $wood = $('#wood > *');
    const $woodW = $('#woodW');
    const $woodO = $('#woodO');
    const $woodO2 = $('#woodO2');
    const $woodD = $('#woodD');
    const $workW = $('#workW');
    const $workO = $('#workO');
    const $workR = $('#workR');
    const $workK = $('#workK');

    //---------------
    // RUN LOGO ANIMATION
    //---------------

    tl.set($wood, {opacity: 0}).set($work, {opacity: 0})
        .from($logoFull, 2, {scale: 0, opacity: 0, transformOrigin: 'center center', rotation: '-720deg', ease: Elastic.easeOut}, 1.5)
        .from($storkName, .5, {y: "-50", opacity: 0, ease: Elastic.easeOut})
        .addLabel('startWood')
        .call(runWoodText, ['bing1', $woodW], this, 'startWood')
        .call(runWoodText, ['bing2', $woodO], this, 'startWood+=.2')
        .call(runWoodText, ['bing3', $woodO2], this, 'startWood+=.4')
        .call(runWoodText, ['bing4', $woodD], this, 'startWood+=.6')
        .addLabel('startWork', '+=.4')
        .call(runWoodText, ['bang1', $workW], this, 'startWork')
        .call(runWoodText, ['bang2', $workO], this, 'startWork+=.2')
        .call(runWoodText, ['bang3', $workR], this, 'startWork+=.4')
        .call(runWoodText, ['bang4', $workK], this, 'startWork+=.6')
};

function runWoodText(label, letter){
    let tl = new TimelineLite();
    const $logoFull = $('#logo-full');

    //---------------
    // RUN ONE LETTER ANIMATION
    //---------------

    tl.addLabel(label)
    .to($logoFull, 0, {scale: 1.1}, label)
    .fromTo($logoFull, .25, {scale: 1.1}, {scale: 1, ease: Bounce.easeOut})
    .fromTo(letter, .1, {opacity: 0}, {opacity: 1}, label)
};
