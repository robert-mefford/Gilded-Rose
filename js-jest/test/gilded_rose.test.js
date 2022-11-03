const {Shop, Item} = require("../src/gilded_rose");

describe("Normal Items", function() {
  it("`quality` can't be `negative`", function() {
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
