/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

import * as CONST from '../../const';
import GameObject from '../GameObject';
import ImageWebGLRenderer from './ImageWebGLRenderer';
import ImageCanvasRenderer from './ImageCanvasRenderer';

/**
* An Image is a light-weight object you can use to display anything that doesn't need physics or animation.
* It can still rotate, scale, crop and receive input events. This makes it perfect for logos, backgrounds, simple buttons and other non-Sprite graphics.
*
* @class Phaser.GameObject.Image
* @extends Phaser.GameObject
* @constructor
* @param {Phaser.Game} game - A reference to the currently running game.
* @param {number} [x=0] - The x coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
* @param {number} [y=0] - The y coordinate of the Image. The coordinate is relative to any parent container this Image may be in.
* @param {string} [key] - The texture used by the Image during rendering. It can be a string which is a reference to the Cache entry, or an instance of a RenderTexture, BitmapData or PIXI.Texture.
* @param {string|number} [frame] - If this Image is using part of a sprite sheet or texture atlas you can specify the exact frame to use by giving a string or numeric index.
*/
export default class Image extends GameObject {

    constructor(state, x, y, key, frame) {
        var _texture = state.game.textures.get(key);
        var _frame = _texture.get(frame);

        super(state, x, y, _texture, _frame);

        this.type = CONST.IMAGE;

        //this.render = ImageWebGLRenderer;
        this.render = ImageCanvasRenderer; 
    }

    get width() {
        return this.transform._scaleX * this.frame.realWidth;
    }

    set width(value) {
        this.scaleX = value / this.frame.realWidth;
    }
   
    get height() {
        return this.transform._scaleY * this.frame.realHeight;
    }

    set height(value) {
        this.scaleY = value / this.frame.realHeight;
    }
}