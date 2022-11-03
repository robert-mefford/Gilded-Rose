class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      let decreasement = (this.items[i].name.startsWith("Conjured") ? 2 : 1);
      if (!this.items[i].name.startsWith('Aged Brie') && !this.items[i].name.startsWith('Backstage passes')) {
        if (this.items[i].quality > 0) {
          if (!this.items[i].name.startsWith('Sulfuras')) {
            this.items[i].quality = this.items[i].quality - decreasement;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name.startsWith('Backstage passes')) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (!this.items[i].name.startsWith('Sulfuras')) {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (!this.items[i].name.startsWith('Aged Brie')) {
          if (!this.items[i].name.startsWith('Backstage passes')) {
            if (this.items[i].quality > 0) {
              if (!this.items[i].name.startsWith('Sulfuras')) {
                this.items[i].quality = this.items[i].quality - decreasement;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
