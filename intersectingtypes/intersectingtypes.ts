interface Knife{
  cut(): void;
};
interface ScrewDriver{
  screwSomething(): void;
};
interface BottleOpener{
  openBottle(): void;
};

type SwissArmyKnife = Knife & ScrewDriver & BottleOpener;

function useTool(tool: SwissArmyKnife){
  tool.cut();
  tool.screwSomething();
  tool.openBottle();
}
