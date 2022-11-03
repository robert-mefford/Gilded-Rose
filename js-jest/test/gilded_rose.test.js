const {Shop, Item} = require("../src/gilded_rose");

describe("Normal Items", function() {
  it("`quality` can't be negative", function() {
    const gildedRose = new Shop([new Item("foo", 0, 0), new Item("foo", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[1].quality).toBe(0);
    expect(items[0].sellIn).toBe(-1);
    expect(items[1].sellIn).toBe(1);
  });

  it("`quality` and `sellIn` decrease by 1", function() {
    const gildedRose = new Shop([new Item("foo", 2, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(9);
    expect(items[0].sellIn).toBe(1);
  });

  it("`quality` decrease by 2 when `sellIn` is negative", function() {
    const gildedRose = new Shop([new Item("foo", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(-1);
  })
});

describe("Aged Brie", function() {
  it("`quality` increase by 1 when `sellIn` is positive", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
    expect(items[0].sellIn).toBe(1);
  });

  it("`quality` increase by 2 when `sellIn` is negative", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
    expect(items[0].sellIn).toBe(-1);
  })
});

describe("Sulfuras", function() {
  it("`quality` and `sellIn` never change", function() {
    const gildedRose = new Shop([new Item("Sulfuras", 0, 80)]);
    let items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(0);
    items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(80);
    expect(items[0].sellIn).toBe(0);
  });
});

describe("Backstage passes", function() {
  it("`quality` increase by 1 if `sellIn` is over 10", function() {
    const gildedRose = new Shop([new Item("Backstage passes", 12, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(11);
    expect(items[0].sellIn).toBe(11);
  });

  it("`quality` increase by 2 if `sellIn` is between 4 and 10", function() {
    const gildedRose = new Shop([new Item("Backstage passes", 9, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(12);
    expect(items[0].sellIn).toBe(8);
  });

  it("`quality` increase by 3 if `sellIn` is between 0 and 5", function() {
    const gildedRose = new Shop([new Item("Backstage passes", 5, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(13);
    expect(items[0].sellIn).toBe(4);
  });

  it("`quality` has to be 0 if `sellIn` is negative", function() {
    const gildedRose = new Shop([new Item("Backstage passes", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(-1);
  });
});

describe("Conjured Items", function() {
  it("`quality` can't be negative", function() {
    const gildedRose = new Shop([new Item("Conjured", 0, 0), new Item("Conjured", 2, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[1].quality).toBe(0);

    expect(items[0].sellIn).toBe(-1);
    expect(items[1].sellIn).toBe(1);
  });

  it("`quality` and `sellIn` decrease by 2", function() {
    const gildedRose = new Shop([new Item("Conjured", 2, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(8);
    expect(items[0].sellIn).toBe(1);
  });

  it("`quality` decrease by 4 when `sellIn` is negative", function() {
    const gildedRose = new Shop([new Item("Conjured", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(6);
    expect(items[0].sellIn).toBe(-1);
  })
});