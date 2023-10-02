//delcare and push to the DOM the store name at top and bottom
let hits=0;
let spins=0;
let over_half=false;
hits_span.innerHTML=hits;
spins_span.innerHTML=spins;


function changeClassName(element) {
    if(element.className=='item'){
        element.className='item rotate';
        spins=spins+1;
    } 

    spins_span.innerHTML=spins;
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2);

    let hits_spins_ratio = hits/spins;
 
    if (hits_spins_ratio > 0) {
        if (hits_spins_ratio >= 0.5 && hits < spins) {
            progress = 'You win!';
        } else if (hits_spins_ratio >= 0.25) {
            progress = 'Almost there!';
        } else {
            progress = 'On your way!';
        }
    } else {
        progress = 'Get going!';
    }
    win_span.innerHTML = progress;
}

function resetClassName(element) {
    if(element.className=='item rotate'){
        element.className='item';
        hits=hits+=2;
    } else {
        changeClassName(element)
    }

    hits_span.innerHTML=hits;
    hit_spin_span.innerHTML=Number(hits/spins).toFixed(2);

    
    if (hits_spins_ratio > 0) {
        if (hits_spins_ratio >= 0.5 && hits < spins) {
            progress = 'You win!';
        } else if (hits_spins_ratio >= 0.25) {
            progress = 'Almost there!';
        } else {
            progress = 'On your way!';
        }
    } else {
        progress = 'Get going!';
    }
    win_span.innerHTML = progress;
}

const store_name="Justin Wang";
top_title.innerHTML=(store_name + "'s Used Smart Phone Store");
bottom_title.innerHTML=(store_name + "'s Used Smart Phone Store");