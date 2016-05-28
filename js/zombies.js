/**
 * Created by aaronendsley on 5/27/16.
 */
'use strict'
var zombies=function(){
    clearDeck();
    deck.bb=createCards('bb', 'Bowling Ball', '1 Hand', 2, 0, 'none', 200);
    deck.fast=createCards('fa', 'fast', 'Power Rank 2', 0, 1, 'none', 0);
    deck.tough=createCards('to', 'Tough', 'Power Rank 3',1, 0, 'none', 0);
    deck.talons=createCards('gt', 'Glowing Talons', '1 Hand', 3, 0, 'none', 400);
    deck.ss=createCards('ss', 'Smart Shoes', 'FootGear', 3, 0,'none', 400);
    deck.xmas=createCards('xmas', 'Xmas Lights', 'Armor', 4,0, 'none', 600 );
    deck.pm=createCards('pm', 'Pet Monkey', '1 Hand', 4, 0, 'none', 600);
    deck.fh=createCards('fh','Fire Hydrant','2 Hands',4,0,'none', 500);
    deck.spa=createCards('spa','Shining Porcelain Armor','Armor Big',2,0,'none', 200);
    deck.fangs=createCards('fgs','fangs','none',1,0,'none',100);
    deck.umb=createCards('umb','Umbrella','Headgear',2,0,'none',300);
    deck.gs=createCards('gs','Gravediggers Shovel','1 Hand',4,0,'none',400);
    deck.pogo=createCards('pogo', 'Pogo Stick', '2 Hands', 3, 1, 'none', 200);
    deck.ssigh=createCards('stopS', 'Stop Sign', '1 Hand', 3, 0, 'none', 400);
    deck.carDoh=createCards('carDoh', 'Car Door', 'Armor Big', 3, 0, 'none', 300);
    deck.evEy=createCards('evEy', 'Evil Eyes', 'none', 3, 0, 'none', 500);
    deck.OnFi=createCards('onFi', 'On Fire', 'none', 3, 0, 'none', 0);
    deck.mouth=createCards('mouth', 'Gaping Mouth', 'none', 2, 0, 'none', 200);
    deck.forked=createCards('for', 'Forked Tongue', 'none', 2, 0, 'none', 300);
    deck.flowPot=createCards('flowPot', 'Flower Pots', 'FootGear', 1, 0, 'none', 100);
    deck.arm=createCards('arm','Arm', '1 Hand', 2, 0, 'none', 300 );
    deck.chain=createCards('chainL', 'Chain Link Fence', 'Armor', 3, 0, 'none', 200);
    deck.mail=createCards('mailB', 'MailBox', 'Headgear', 4, 0, 'none', 300);
    deck.armLeg=createCards('armleg', 'An Arm And a Leg', '2 Hand Big', 5, 0, 'none', 500);
    deck.birdHo=createCards('biHo', 'BirdHouse', 'Head Gear', 4, 0, 'none', 400);
    deck.decayFur=createCards('decafur','Decaying Flab', 'Armor Big', 4, 0, 'none', 0);
    deck.flyPaper=createCards('flyPap', 'FlyPaper Necktie', 'none', 3, 0, 'none', 200);
    deck.mouTraps=createCards('mouTrap', 'MouseTraps', 'FootGear', 2, 1, 'none', 200);
    deck.thumbTacks=createCards('thubTacks', 'ThumbTacks', 'FootGear', 1, 0, 'none', 700);
    deck.lbf=createCards('lbf', 'Long Bony Fingers', 'none', 2, 0, 'none', 500);
    deck.sodaCans=createCards('sodaC', 'Soda Cans', 'FootGear', 2, 0, 'none', 100);
    deck.legs=createCards('oneLeg', 'Leg', '1 Hand Big', 3, 0,'none', 400 );
    deck.disPit=createCards('disPit', 'Diseased Spit', 'none', 3,0, 'none', 0);
    deck.paddleBall=createCards('PaddBall', 'PaddleBall', '1 Hand', 4, 0, 'none', 400);
    deck.shoppingCart=createCards('shopCard', 'Shopping Cart', '1 Hand Big', 2, 0, 'none', 300);
    deck.ownPanc=createCards('Yopsos', 'Your Own Pancreas And Spleen', '1 Hand', 4, 0, 'none', 400);
    deck.fetishObject=createCards('FetOb', 'Fetish Object', '1 Hand', 3, 0, 'none', 400);
    deck.PorkChop=createCards('PorkChop', 'Pork Chop', '1 Hand', 1, 0, 'none', 200);
    deck.anotZombie=createCards('AnotherZombie', 'Another Zombie','2 Hands Big', 4, 0, 'none', 600);
    deck.Saucy=createCards('SaucePan', 'SaucePan', 'HeadGear', 2, 0, 'none', 600);
    deck.bowlTrop=createCards('BowlingTrop','Bowling Trophy', 'HeadGear Big', 2, 0, 'none', 200);
    deck.funBone=createCards('FunnyBone', 'Funny Bone', '1 Hand', 3, 0, 'none', 500);
};