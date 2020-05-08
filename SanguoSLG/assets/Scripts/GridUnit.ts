import { GridUnitData } from './GridUnitData'
import { GridType } from './GridType';

export class GridUnit
{
    public gridData: GridUnitData;
    private SpriteRenderer: cc.Sprite;

    public Refresh()
    {
        switch(this.gridData.gridType)
        {
            case GridType.Normal:
                this.SpriteRenderer.node.color = cc.Color.WHITE;
                break;
            case GridType.Obstacle:
                this.SpriteRenderer.node.color = cc.Color.GRAY;
                break;
            default:
                this.SpriteRenderer.node.color = cc.Color.WHITE;
                break;
        }
    }
}