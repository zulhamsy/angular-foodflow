export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public recipe: string[];

  constructor(name: string, desc: string, imagePath: string, recipe: string[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.recipe = recipe;
  }
}
