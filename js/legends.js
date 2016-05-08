/**
 * Created by aaronendsley on 5/1/16.
 */
'use strict'

    var legends=function(){
        clearDeck();//this function must be executed so that you can
        deck.elf=createCards('Elf', 'race', 0, 1, 'You go up 1 level for every monster you help someone else kill',0 );
        deck.reallyLongBoy=createCards('Really Long Bow', '2 Hands Big', 3, 0, 'Not Usable by Dwarf', 400);
        deck.goldenFleece=createCards('Golden Fleece', 'Armor', 3, 0, 'Usable by thief only', 500);
        deck.deathMask=createCards('Death Mask', 'Head Gear', 2, 0, 'Not Usable by cleric. The Death Mask  may be discarded to remove one Undead monster from combat. No levels or tresure\'s are gained for that monster', 400 );
        deck.herculesBowArrows=createCards('Hercules Bow And Arrows','Two Hands',4,0,'This counts as a fire/flame attack', 700);
        deck.laurelWreath=createCards('Laurel Leaf', 'Head Gear', 1, 0, 'none', 100);
        deck.bermudaShorts=createCards('Bermuda Shorts of Invulnerability', 'none', 4,0,'none', 400);
        deck.hellKnight=createCards('Hellknight', 'faction', 5, 0, 'You are wearing hellknight armor(which counts as both armor and headgear), worth +5 in combat', 0);
        deck.AchillesHeels=createCards('Achilles Heels','footgear', 3, 0, 'Usable byMales Only', 500);
        deck.holeyGrail=createCards('Holey Grail', 'One Hand', 3, 0, 'none', 300);
        deck.excalibur=createCards('Excalibur', 'one hand', 4, 0, 'Not usable by wizard', 600);
        deck.digitalCloak=createCards('Digital Cloak','none', 2, 0, 'Not usable by Elf', 300);
        deck.maceInACan=createCards('Mace in a can', 'one hand', 5, 0, 'none', 600);
        deck.dragonSkinArmor=createCards('Dragonskin Armor', 'armor', 4, 0, 'none', 700);
        deck.mirroredShield=createCards('Mirrored Shield', 'one hand', 2, 0, 'none', 400);
        deck.sevenLeagueBoots=createCards('Seven League Boots', 'footgear', 1, 1, 'none', 300);
        deck.martialHelmet=createCards('Martial Helmet', 'headgear', 3, 0, 'none', 400);
        deck.lionSkin=createCards('Lion Skin', 'armor', 5,0,'Not usable by thief', 600);
        deck.spikeyElbows=createCards('Spiky Elbows', 'none', 1, 0, 'none', 200);
        deck.paulBunyasAxe=createCards('Paul Bunyans axe', 'two hands big', 4, 0, 'none', 600);
        deck.hireling=createCards('Hireling', 'none', 1, 0, 'Allows you to carry and use one extra item, even if you could not otherwise. if you lose your hireling the item goes too. you may discard your hireling for an automatic escape from any monster', 0);
        deck.aegis=createCards('Aegis', 'one hand big', 3, 0, 'usable by females only', 500);
        deck.rodAsclepius=createCards('Rod of Asclepius', 'one hand', 2, 0, 'You may discard the rod to avoid any curse or bad stuff that would cause you to lose levels', 500);
        deck.blessingofGods=createCards('Blessing of the Gods', 'none', 3, 0, 'none', 0);
        deck.laddie=createCards('Laddie', 'big', 1, 0, 'laddie is awesome the end', 100);
        deck.heroSandwich=createCards('Hero Sandwich', 'two hands big', 5, 0, 'usable by halfling only', 300);
        deck.impressiveBeard=createCards('Impressive Beard', 'armor', 2, 0, 'usable by dwarf only', 0);
        deck.magicBassoon=createCards('Magic Bassoon', 'two hands big', 4, 0, 'none', 600);
        deck.thunderbolt=createCards('Thunderbolt', 'one hand', 2, 0, 'usable by wizard only, this counts as a fire/flame attack', 0);
        deck.trident=createCards('Trident', 'one hand', 3, 0, 'not usable by halfling', 300);
        deck.glassSlippers=createCards('Glass Slippers', 'footgear', 3, 0, 'Monsters cant see them, so they are immune to any lose your footgear bad stuff', 300);
        deck.featherHeaddress=createCards('Feathered Headdress', 'headgear', 4, 0, 'usable by cleric only', 500);
        deck.thorsHammer=createCards('Thors Hammer', 'one hand big', 5, 0, 'usable by warrors only', 700);
        deck.barkArmor=createCards('Bark Armor', 'Armor', 3, 0, 'usable by elf only', 0);
        deck.orpheusLyre=createCards('Orpheus Lyre', 'two hands', 3, 0, 'has double  the bonus against undead monsters', 300);
    };