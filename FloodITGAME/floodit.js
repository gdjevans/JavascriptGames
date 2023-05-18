/**
 * @constructor
 * @param {string=} aName
 * @param {number=} aSize
 * @param {boolean=} isBold
 */
function TFont(aName, aSize, isBold) {
	this.Name = aName || "Arial";
	this.Size = aSize || 14;
	this.Bold = isBold || false;
}

/**
 * @return {string}
 */
TFont.prototype.asString = function () {
	var s = "";
	if (this.Bold) s = "bold ";
	s = s + this.Size + "px " + this.Name;
	return s;
}

/**
 * @return {TFont}
 */
TFont.prototype.clone = function () {
	return new TFont(this.Name, this.Size, this.Bold);
}

/**
 * @constructor
 * @param {number=} aX
 * @param {number=} aY
 */
function TPoint(aX, aY) {
	this.X = aX || 0;
	this.Y = aY || 0;
}

/**
 * @constructor
 * @param {string} aCaption
 * @param {number} aLeft
 * @param {number} aTop
 * @param {number} aWidth
 * @param {number} aHeight
 */
function TControl(aCaption, aLeft, aTop, aWidth, aHeight) {
	this.Caption = aCaption || "";
	this.Left = aLeft || 0;
	this.Top = aTop || 0;
	this.Width = aWidth || 0;
	this.Height = aHeight || 0;
	this.Visible = true;
	this.Enabled = true;
	this.NeedRepaint = true;
	this.Parent = null;
	this.Font = new TFont("Arial", 14, false);
	this.FontColor = new TColor(255, 255, 255);
	this.Color = new TColor(0, 0, 0);
}

TControl.prototype.show = function () {
	this.Visible = true;
	this.NeedRepaint = true;
}

TControl.prototype.hide = function () {
	this.Visible = false;
	this.NeedRepaint = true;
}

TControl.prototype.enable = function () {
	this.Enabled = true;
	this.NeedRepaint = true;
}

TControl.prototype.disable = function () {
	this.Enabled = false;
	this.mouseOut();
	this.NeedRepaint = true;
}

TControl.prototype.paint = function () {}

/**
 * @param {string} aCaption
 */
TControl.prototype.setCaption = function (aCaption) {
	if (!aCaption) return;
	this.Caption = aCaption;
	this.NeedRepaint = true;
}

TControl.prototype.getCaption = function () {
	return this.Caption;
}

/**
 * @return {boolean}
 */
TControl.prototype.isMouseOver = function () {
	return ((gMouse.X >= this.getLeft()) && (gMouse.X <= this.getLeft() + this.Width) && (gMouse.Y >= this.getTop()) && (gMouse.Y <= this.getTop() + this.Height));
}

/**
 * @param {TControl} aParent
 */
TControl.prototype.setParent = function (aParent) {
	if (!aParent) return;
	this.Parent = aParent;
}

/**
 * @param {TFont} aFont
 */
TControl.prototype.setFont = function (aFont) {
	if (!aFont) return;
	this.Font = aFont;
	this.NeedRepaint = true;
}

/**
 * @param {number} aFontSize
 */
TControl.prototype.setFontSize = function (aFontSize) {
	if (!aFontSize) return;
	this.FontSize = aFontSize;
	this.NeedRepaint = true;
}

/**
 * @param {TColor} aFontColor
 */
TControl.prototype.setFontColor = function (aFontColor) {
	if (!aFontColor) return;
	this.FontColor = aFontColor.clone();
	this.NeedRepaint = true;
}

/**
 * @param {TColor} aColor
 */
TControl.prototype.setColor = function (aColor) {
	if (!aColor) return;
	this.Color = aColor.clone();
	this.NeedRepaint = true;
}

/**
 * @param {number} aLeft
 */
TControl.prototype.setLeft = function (aLeft) {
	this.Left = aLeft || 0;
	this.NeedRepaint = true;
	this.mouseMove(gMouse.X, gMouse.Y);
}

/**
 * @param {number} aTop
 */
TControl.prototype.setTop = function (aTop) {
	this.Top = aTop || 0;
	this.NeedRepaint = true;
	this.mouseMove(gMouse.X, gMouse.Y);
}

/**
 * @return {number}
 */
TControl.prototype.getWidth = function () {
	return this.Width;
}

/**
 * @return {number}
 */
TControl.prototype.getHeight = function () {
	return this.Height;
}

/**
 * @param {number} aLeft
 * @param {number} aTop
 */
TControl.prototype.setPosition = function (aLeft, aTop) {
	this.Left = aLeft || 0;
	this.Top = aTop || 0;
	this.NeedRepaint = true;
	this.mouseMove(gMouse.X, gMouse.Y);
}

/**
 * @param {number} x
 * @param {number} y
 */
TControl.prototype.mouseMove = function (x, y) {}

TControl.prototype.mouseOut = function () {}

/**
 * @param {boolean} left
 */
TControl.prototype.mouseDown = function (left) {}

/**
 * @param {boolean} left
 */
TControl.prototype.mouseUp = function (left) {}

/**
 * @return {boolean}
 */
TControl.prototype.update = function () {
	if (!this.NeedRepaint) return false;
	this.NeedRepaint = false;
	return true;
}

/**
 * @return {boolean}
 */
TControl.prototype.getVisible = function () {
	if (!this.Parent) return this.Visible;
	else return (this.Visible && this.Parent.getVisible());
}

/**
 * @return {boolean}
 */
TControl.prototype.getEnabled = function () {
	if (!this.Parent) return this.Enabled;
	else return (this.Enabled && this.Parent.getEnabled());
}

/**
 * @return {number}
 */
TControl.prototype.getLeft = function () {
	if (!this.Parent) return this.Left;
	else return parseInt(this.Parent.getLeft() + this.Left, 10);
}

/**
 * @return {number}
 */
TControl.prototype.getTop = function () {
	if (!this.Parent) return this.Top;
	else return parseInt(this.Parent.getTop() + this.Top, 10);
}

/**
 * @constructor
 * @extends TControl
 * @param {number} aLeft
 * @param {number} aTop
 * @param {number} aWidth
 * @param {number} aHeight
 */
function TPanel(aLeft, aTop, aWidth, aHeight) {
	TControl.call(this, "", aLeft, aTop, aWidth, aHeight);
	this.Controls = [];
	this.Alpha = 1;
}
TPanel.prototype = Object.create(TControl.prototype);
TPanel.prototype.constructor = TPanel;

/**
 * @param {number} aAlpha
 */
TPanel.prototype.setAlpha = function (aAlpha) {
	this.Alpha = aAlpha;
	this.NeedRepaint = true;
}

TPanel.prototype.paintBack = function () {
	gContext.beginPath();
	gContext.rect(this.getLeft(), this.getTop(), this.Width - 1, this.Height - 1);
	if (this.Alpha == 0) return;
	if (this.Alpha < 1) gContext.globalAlpha = this.Alpha;
	try {
		gContext.fillStyle = this.Color.asString();
		gContext.fill();
	} finally {
		if (this.Alpha < 1) gContext.globalAlpha = 1;
	}
}

TPanel.prototype.paint = function () {
	if (!this.getVisible()) return;
	this.paintBack();
	gContext.save();
	gContext.clip();
	try {
		for (var i = 0; i < this.Controls.length; i++) this.Controls[i].paint();
	} finally {
		gContext.restore();
	}
}

/**
 * @return {boolean}
 */
TPanel.prototype.update = function () {
	if (!this.getVisible()) return false;
	for (var i = 0; i < this.Controls.length; i++) this.NeedRepaint = this.Controls[i].update() || this.NeedRepaint;
	return TControl.prototype.update.call(this);
}

/**
 * @param {TControl} control
 */
TPanel.prototype.addControl = function (control) {
	if (!control) return;
	this.Controls.push(control);
	control.setParent(this);
	this.NeedRepaint = true;
}

/**
 * @param {TControl} control
 * @param {number} position
 */
TPanel.prototype.insertControl = function (control, position) {
	if (!control) return;
	if ((position < 0) || (position >= this.Controls.length)) this.addControl(control);
	else {
		this.Controls.splice(position, 0, control);
		control.setParent(this);
		this.NeedRepaint = true;
	}
}

/**
 * @param {TControl} control
 * @return {boolean}
 */
TPanel.prototype.delControl = function (control) {
	if (!control) return false;
	control.setParent(null);
	control.hide();
	for (var i = 0; i < this.Controls.length; i++) {
		if (this.Controls[i] === control) {
			this.Controls.splice(i, 1);
			this.NeedRepaint = true;
			return true;
		}
	}
	return false;
}

TPanel.prototype.mouseOut = function () {
	for (var i = 0; i < this.Controls.length; i++) this.Controls[i].mouseOut();
}

/**
 * @param {number} x
 * @param {number} y
 */
TPanel.prototype.mouseMove = function (x, y) {
	if (!this.getEnabled()) return;
	for (var i = 0; i < this.Controls.length; i++) {
		if (this.Controls[i].isMouseOver()) this.Controls[i].mouseMove(x, y);
		else this.Controls[i].mouseOut();
	}
}

/**
 * @param {boolean} left
 */
TPanel.prototype.mouseDown = function (left) {
	if (!this.getEnabled()) return;
	for (var i = 0; i < this.Controls.length; i++) if (this.Controls[i].isMouseOver()) this.Controls[i].mouseDown(left);
}

/**
 * @param {boolean} left
 */
TPanel.prototype.mouseUp = function (left) {
	if (!this.getEnabled()) return;
	for (var i = 0; i < this.Controls.length; i++) if (this.Controls[i].isMouseOver()) this.Controls[i].mouseUp(left);
}

/**
 * @constructor
 * @extends TPanel
 * @param {number} aLeft
 * @param {number} aTop
 * @param {number} aWidth
 * @param {number} aHeight
 */
function TBorderPanel(aLeft, aTop, aWidth, aHeight) {
	TPanel.call(this, aLeft, aTop, aWidth, aHeight);
	this.BorderColor = new TColor(192, 192, 192);
	this.BorderWidth = 1;
}
TBorderPanel.prototype = Object.create(TPanel.prototype);
TBorderPanel.prototype.constructor = TBorderPanel;

/**
 * @param {TColor} aColor
 */
TBorderPanel.prototype.setBorderColor = function (aColor) {
	this.BorderColor = aColor.clone();
	this.NeedRepaint = true;
}

/**
 * @param {number} aWidth
 */
TBorderPanel.prototype.setBorderWidth = function (aWidth) {
	this.BorderWidth = aWidth;
	this.NeedRepaint = true;
}

TBorderPanel.prototype.paintBack = function () {
	gContext.beginPath();
	gContext.rect(this.getLeft(), this.getTop(), this.Width - 1, this.Height - 1);
	if (this.Alpha == 0) return;
	if (this.Alpha < 1) gContext.globalAlpha = this.Alpha;
	try {
		gContext.fillStyle = this.Color.asString();
		gContext.fill();
		if (this.BorderWidth >= 1) {
			gContext.lineWidth = this.BorderWidth;
			gContext.strokeStyle = this.BorderColor.asString();
			gContext.stroke();
		}
	} finally {
		if (this.Alpha < 1) gContext.globalAlpha = 1;
	}
}

/**
 * @constructor
 * @extends TBorderPanel
 * @param {number} aLeft
 * @param {number} aTop
 * @param {number} aWidth
 * @param {number} aHeight
 */
function TStatPanel(aLeft, aTop, aWidth, aHeight) {
	TBorderPanel.call(this, aLeft, aTop, aWidth, aHeight);
	this.Controls = [];
	this.Alpha = 0.1;
	this.BorderWidth = 3;
	this.BorderColor = new TColor(255, 255, 255);
}
TStatPanel.prototype = Object.create(TBorderPanel.prototype);
TStatPanel.prototype.constructor = TStatPanel;

/**
 * @return {boolean}
 */
TStatPanel.prototype.update = function () {
	if (!this.getVisible()) return false;
	if (this.Alpha < 0.85) {
		this.Alpha += 0.1;
		if (this.Alpha > 0.85) this.Alpha = 0.85;
		this.NeedRepaint = true;
	}
	return TBorderPanel.prototype.update.call(this);
}

/** @enum {number} */
var TTextAlignment = {
	taLeft: 1,
	taCenter: 2,
	taRight: 3
}

/**
 * @constructor
 * @extends TControl
 * @param {string} aCaption
 * @param {number} aLeft
 * @param {number} aTop
 * @param {TTextAlignment=} aTextAlignment
 */
	function TLabel(aCaption, aLeft, aTop, aTextAlignment) {
		TControl.call(this, aCaption, aLeft, aTop, 0, 0);
		this.Font.Size = 14;
		this.MaxWidth = 0;
		this.TextAlignment = aTextAlignment || TTextAlignment.taCenter;
		this.ShowShadow = false;
		this.ShadowColor = new TColor(0, 0, 0);
		this.ShadowOffsetX = 0;
		this.ShadowOffsetY = 0;
		this.ShadowBlur = 0;
	}
TLabel.prototype = Object.create(TControl.prototype);
TLabel.prototype.constructor = TLabel;

/**
 * @param {TTextAlignment} aAlignment
 */
TLabel.prototype.setTextAlignment = function (aAlignment) {
	if (!aAlignment) return;
	this.TextAlignment = aAlignment;
	this.NeedRepaint = true;
}

/**
 * @param {number} aMaxWidth
 */
TLabel.prototype.setMaxWidth = function (aMaxWidth) {
	this.MaxWidth = aMaxWidth || 0;
	this.NeedRepaint = true;
}

/**
 * @param {TColor} aColor
 * @param {number} xOffset
 * @param {number} yOffset
 * @param {number} Blur
 */
TLabel.prototype.showShadow = function (aColor, xOffset, yOffset, Blur) {
	this.ShadowColor = aColor.clone();
	this.ShadowOffsetX = xOffset || 0;
	this.ShadowOffsetY = yOffset || 0;
	this.ShadowBlur = Blur || 0;
	this.ShowShadow = true;
	this.NeedRepaint = true;
}

TLabel.prototype.hideShadow = function () {
	this.ShowShadow = false;
	this.NeedRepaint = true;
}

/**
 * @return {number}
 */
TLabel.prototype.getWidth = function () {
	if (this.Caption == "") return 0;
	gContext.font = this.Font.asString();
	gContext.fillStyle = this.FontColor.asString();
	if (this.MaxWidth == 0) {
		return gContext.measureText(this.Caption).width;
	} else {
		var txtWidth = gContext.measureText(this.Caption).width;
		if (txtWidth > this.MaxWidth) return this.MaxWidth;
		else return txtWidth;
	}
}

TLabel.prototype.paint = function () {
	if (!this.getVisible()) return;
	if (this.Caption == "") return;
	gContext.font = this.Font.asString();
	gContext.fillStyle = this.FontColor.asString();
	gContext.textBaseline = "middle";
	if (this.TextAlignment == TTextAlignment.taLeft) gContext.textAlign = "left";
	else if (this.TextAlignment == TTextAlignment.taRight) gContext.textAlign = "right";
	else gContext.textAlign = "center";

	gContext.save();
	try {
		if (this.ShowShadow) {
			gContext.shadowColor = this.ShadowColor.asString();
			gContext.shadowOffsetX = this.ShadowOffsetX;
			gContext.shadowOffsetY = this.ShadowOffsetY;
			gContext.shadowBlur = this.ShadowBlur;
		} else gContext.shadowColor = "transparent";

		if (this.MaxWidth == 0) {
			gContext.fillText(this.Caption, this.getLeft(), this.getTop());
		} else {
			var yOffset = 0;
			var lineHeight = 30;
			var words = this.Caption.split(" ");
			var line = words[0];
			for (var i = 1; i < words.length; i++) {
				if (gContext.measureText(line + " " + words[i]).width > this.MaxWidth) {
					gContext.fillText(line, this.getLeft(), this.getTop() + yOffset);
					line = words[i];
					yOffset += lineHeight;
				} else line = line + " " + words[i];
			}
			gContext.fillText(line, this.getLeft(), this.getTop() + yOffset);
		}
	} finally {
		gContext.restore();
	}
}

/**
 * @constructor
 * @extends TLabel
 * @param {string} aCaption
 * @param {number} aLeft
 * @param {number} aTop
 */
function TCaptionLabel(aCaption, aLeft, aTop) {
	TLabel.call(this, aCaption, aLeft, aTop, TTextAlignment.taCenter);
	this.Font.Size = 34;
	this.Font.Bold = true;
	this.showShadow(new TColor(0, 255, 0), 0, 0, 10);
}
TCaptionLabel.prototype = Object.create(TLabel.prototype);
TCaptionLabel.prototype.constructor = TCaptionLabel;

/**
 * @constructor
 * @extends TLabel
 * @param {string} aCaption
 * @param {number} aLeft
 * @param {number} aTop
 */
function TGameOverLabel(aCaption, aLeft, aTop) {
	TLabel.call(this, aCaption, aLeft, aTop, TTextAlignment.taCenter);
	this.Font.Size = 4;
	this.Font.Bold = true;
	this.Angle = 0;
	this.showShadow(new TColor(0, 0, 0), 0, 0, 15);
}
TGameOverLabel.prototype = Object.create(TLabel.prototype);
TGameOverLabel.prototype.constructor = TGameOverLabel;

TGameOverLabel.prototype.show = function () {
	this.Font.Size = 4;
	this.EndFontSize = 70;
	this.Angle = 0;
	this.EndAngle = 2 * 360;
	this.FontStep = (this.EndFontSize - this.Font.Size) / 20;
	this.AngleStep = (this.EndAngle - this.Angle) / 20;
	TLabel.prototype.show.call(this);
}

/**
 * @return {boolean}
 */
TGameOverLabel.prototype.update = function () {
	if (!this.getVisible()) return false;
	if (this.Font.Size < this.EndFontSize) {
		this.Font.Size = this.Font.Size + this.FontStep;
		if (this.Font.Size > this.EndFontSize) this.Font.Size = this.EndFontSize;
		this.NeedRepaint = true;
	}
	if (this.Angle < this.EndAngle) {
		this.Angle += this.AngleStep;
		if (this.Angle > this.EndAngle) this.Angle = this.EndAngle;
		this.NeedRepaint = true;
	}
	return TLabel.prototype.update.call(this);
}

TGameOverLabel.prototype.paint = function () {
	if (!this.getVisible()) return;
	if (this.Caption == "") return;
	gContext.font = this.Font.asString();
	gContext.textBaseline = "middle";
	gContext.textAlign = "center";

	var x = this.getLeft();
	var y = this.getTop();
	gContext.save();
	gContext.translate(x, y);
	gContext.rotate(this.Angle * Math.PI / 180);
	gContext.fillStyle = this.FontColor.asString();
	gContext.fillText(this.Caption, 0, 0);
	gContext.lineWidth = this.Font.Size / 20;
	gContext.strokeStyle = "black";
	gContext.strokeText(this.Caption, 0, 0);
	gContext.restore();
}

/**
 * @constructor
 */
function TImageList() {
	this.Images = [];
}

TImageList.prototype.count = function () {
	return this.Images.length;
};

/**
 * @param {string} aPath
 * @return {number}
 */
TImageList.prototype.add = function (aPath) {
	if (!aPath) return -1;
	var image = new Image();
	for (var i = 0; i < 3; i++) { // workaround for some browsers
		image.src = aPath;
		if (image.height > 0) break;
	}
	if (image.height == 0) return -1;
	this.Images.push(image);
	return (this.Images.length - 1);
};

/**
 * @param {number} index
 * @return {Image}
 */
TImageList.prototype.get = function (index) {
	if (index < 0) return null;
	if (index >= this.Images.length) return null;
	return this.Images[index];
}

/**
 * @constructor
 * @extends TControl
 * @param {string} aPath
 * @param {number} aLeft
 * @param {number} aTop
 */
function TStaticImage(aPath, aLeft, aTop) {
	TControl.call(this, "", aLeft, aTop, 0, 0);
	this.Image = new Image();
	this.setImage(aPath);
}
TStaticImage.prototype = Object.create(TControl.prototype);
TStaticImage.prototype.constructor = TStaticImage;

TStaticImage.prototype.paint = function () {
	if (!this.getVisible()) return;
	gContext.drawImage(this.Image, this.getLeft(), this.getTop());
}

/**
 * @param {string} aPath
 */
TStaticImage.prototype.setImage = function (aPath) {
	this.Image.src = aPath;
	this.Height = this.Image.height;
	this.Width = this.Image.width;
}

/**
 * @constructor
 * @extends TControl
 * @param {string} aCaption
 * @param {number} aLeft
 * @param {number} aTop
 * @param {number} aWidth
 * @param {number} aHeight
 * @param {function(string, number, boolean=)} callbackClick
 * @param {number=} aID
 * @param {Object=} aImageList
 * @param {number=} aImageIndex
 */
function TButton(aCaption, aLeft, aTop, aWidth, aHeight, callbackClick, aID, aImageList, aImageIndex) {
	TControl.call(this, aCaption, aLeft, aTop, aWidth, aHeight);
	this.OnClick = callbackClick;
	this.ID = aID || 0;
	this.TButtonState = {
		bsDisabled: 0,
		bsNormal: 1,
		bsMouse: 2,
		bsDown: 3
	}
	this.ButtonState = this.TButtonState.bsNormal;
	this.ImageList = null;
	this.ImageIndex = -1;
	if (aImageList) {
		this.ImageList = aImageList;
		if (isNaN(aImageIndex)) return;
		if ((aImageIndex >= 0) && (aImageIndex < aImageList.count())) this.ImageIndex = aImageIndex;
	}
}
TButton.prototype = Object.create(TControl.prototype);
TButton.prototype.constructor = TButton;

TButton.prototype.hide = function () {
	TControl.prototype.hide.call(this);
	if ((this.ButtonState == this.TButtonState.bsMouse) || (this.ButtonState == this.TButtonState.bsDown)) this.ButtonState = this.TButtonState.bsNormal;
}

TButton.prototype.enable = function () {
	this.ButtonState = this.TButtonState.bsNormal;
	TControl.prototype.enable.call(this);
}

TButton.prototype.disable = function () {
	this.ButtonState = this.TButtonState.bsDisabled;
	TControl.prototype.disable.call(this);
}

/**
 * @param {number} x
 * @param {number} y
 */
TButton.prototype.mouseMove = function (x, y) {
	if (!this.getVisible()) return;
	if (!this.getEnabled()) return;
	if (this.isMouseOver()) {
		if (this.ButtonState == this.TButtonState.bsNormal) {
			this.ButtonState = this.TButtonState.bsMouse;
			this.NeedRepaint = true;
		}
	} else {
		if ((this.ButtonState == this.TButtonState.bsMouse) || (this.ButtonState == this.TButtonState.bsDown)) {
			this.ButtonState = this.TButtonState.bsNormal;
			this.NeedRepaint = true;
		}
	}
}

TButton.prototype.mouseOut = function () {
	if ((this.ButtonState == this.TButtonState.bsNormal) || (this.ButtonState == this.TButtonState.bsDisabled)) return;
	this.ButtonState = this.TButtonState.bsNormal;
	this.NeedRepaint = true;
}

/**
 * @param {boolean} left
 */
TButton.prototype.mouseDown = function (left) {
	if (!this.getVisible()) return;
	if (!this.getEnabled()) return;
	if (!left) return;
	if (!this.isMouseOver()) return;
	this.ButtonState = this.TButtonState.bsDown;
	this.NeedRepaint = true;
}

/**
 * @param {boolean} left
 */
TButton.prototype.mouseUp = function (left) {
	if (!this.getVisible()) return;
	if (!this.getEnabled()) return;
	if (!left) return;
	if (this.ButtonState != this.TButtonState.bsDown) return;
	this.ButtonState = this.TButtonState.bsMouse;
	this.NeedRepaint = true;
	this.OnClick.call(this, this.Caption, this.ID);
	if (this.ButtonState != this.TButtonState.bsDisabled) {
		if (!this.getEnabled() || !this.getVisible()) this.ButtonState = this.TButtonState.bsNormal;
		else this.mouseMove(gMouse.X, gMouse.Y);
		this.NeedRepaint = true;
	}
}

/**
 * @param {number} aImageIndex
 */
TButton.prototype.setImageIndex = function (aImageIndex) {
	this.ImageIndex = -1;
	if (isNaN(aImageIndex)) return;
	if (!(this.ImageList)) return;
	if ((aImageIndex >= 0) && (aImageIndex < this.ImageList.count())) {
		this.ImageIndex = aImageIndex;
		this.NeedRepaint = true;
	}
}

TButton.prototype.paintBack = function () {
	gContext.beginPath();
	var fillGradient = gContext.createLinearGradient(this.getLeft(), this.getTop(), this.getLeft(), this.getTop() + this.Height);
	switch (this.ButtonState) {
	case this.TButtonState.bsMouse:
		fillGradient.addColorStop(0, "#6FD381");
		fillGradient.addColorStop(1, "#366447");
		break;
	case this.TButtonState.bsDown:
		fillGradient.addColorStop(0, "#366447");
		fillGradient.addColorStop(1, "#6FD381");
		break;
	case this.TButtonState.bsDisabled:
		fillGradient.addColorStop(0, "#707070");
		fillGradient.addColorStop(1, "#707070");
		break;
	case this.TButtonState.bsNormal:
		fillGradient.addColorStop(0, "#33a047");
		fillGradient.addColorStop(1, "#002b0a");
		break;
	}
	gContext.lineWidth = 1;
	gContext.rect(this.getLeft(), this.getTop(), this.Width, this.Height);
	gContext.fillStyle = fillGradient;
	gContext.strokeStyle = "white";
	gContext.fill();
	gContext.stroke();
}

TButton.prototype.paintCaption = function () {
	if ((this.Caption == "") && (this.ImageIndex < 0)) return;
	var textOffset = 0;
	if (this.ButtonState == this.TButtonState.bsDown) textOffset = 2;
	gContext.font = this.Font.asString();
	if (this.ButtonState == this.TButtonState.bsDisabled) gContext.fillStyle = "#707070";
	else gContext.fillStyle = this.FontColor.asString();

	gContext.save();
	gContext.clip();
	try {
		gContext.textBaseline = "middle";

		if (this.ImageIndex < 0) { // text only
			gContext.textAlign = "center";
			gContext.fillText(this.Caption, this.getLeft() + this.Width / 2 + textOffset, this.getTop() + this.Height / 2 + textOffset);
		} else if (this.Caption == "") { // image only
			var image = this.ImageList.get(this.ImageIndex);
			gContext.drawImage(image, this.getLeft() + (this.Width - image.width) / 2 + textOffset, this.getTop() + (this.Height - image.height) / 2 + textOffset);
		} else { // text and image
			var image = this.ImageList.get(this.ImageIndex);
			var metrics = gContext.measureText(this.Caption);
			var totalWidth = metrics.width + image.width + 10;
			gContext.textAlign = "left";
			gContext.fillText(this.Caption, this.getLeft() + (this.Width - totalWidth) / 2 + textOffset, this.getTop() + this.Height / 2 + textOffset);
			gContext.drawImage(image, this.getLeft() + (this.Width - totalWidth) / 2 + totalWidth - image.width + textOffset, this.getTop() + (this.Height - image.height) / 2 + textOffset);
		}
	} finally {
		gContext.restore();
	}
}

TButton.prototype.paint = function () {
	if (!this.getVisible()) return;
	this.paintBack();
	this.paintCaption();
}

/**
 * @constructor
 * @extends TButton
 * @param {TColor} aColor
 * @param {number} aLeft
 * @param {number} aTop
 * @param {number} aWidth
 * @param {number} aHeight
 * @param {function(string, number, boolean=)} callbackClick
 * @param {number=} aID
 */
function TColorButton(aColor, aLeft, aTop, aWidth, aHeight, callbackClick, aID) {
	TButton.call(this, "", aLeft, aTop, aWidth, aHeight, callbackClick, aID);
	this.setColor(aColor);
}
TColorButton.prototype = Object.create(TButton.prototype);
TColorButton.prototype.constructor = TColorButton;

TColorButton.prototype.paintBack = function () {
	gContext.beginPath();
	this.strokeStyle = this.Color.asString();
	switch (this.ButtonState) {
	case this.TButtonState.bsMouse:
		gContext.strokeStyle = "white";
		gContext.lineWidth = 3;
		break;
	case this.TButtonState.bsDown:
		gContext.strokeStyle = "silver";
		gContext.lineWidth = 3;
		break;
	case this.TButtonState.bsDisabled:
	case this.TButtonState.bsNormal:
		gContext.strokeStyle = this.Color.asString();
		gContext.lineWidth = 1;
		break;
	}
	gContext.rect(this.getLeft(), this.getTop(), this.Width, this.Height);
	gContext.fillStyle = this.Color.asString();
	gContext.fill();
	gContext.stroke();
}

TColorButton.prototype.paintCaption = function () {}

/**
 * @constructor
 * @extends TButton
 * @param {string} aCaption
 * @param {number} aLeft
 * @param {number} aTop
 * @param {number} aWidth
 * @param {number} aHeight
 * @param {function(string, number, boolean=)} callbackClick
 * @param {number=} aID
 * @param {Object=} aImageList
 * @param {number=} aImageIndex
 */
function TFloodItButton(aCaption, aLeft, aTop, aWidth, aHeight, callbackClick, aID, aImageList, aImageIndex) {
	TButton.call(this, aCaption, aLeft, aTop, aWidth, aHeight, callbackClick, aID, aImageList, aImageIndex);
	this.Font.Size = 18;
}
TFloodItButton.prototype = Object.create(TButton.prototype);
TFloodItButton.prototype.constructor = TFloodItButton;

/**
 * @return {number}
 */
function random(n) {
	return (Math.floor(Math.random() * n));
}

/**
 * @constructor
 * @param {number} r
 * @param {number} g
 * @param {number} b
 */
function TColor(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;

	/**
	 * @return {string}
	 */
	this.asString = function () {
		return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
	}

	/**
	 * @return {TColor}
	 */
	this.clone = function () {
		return new TColor(this.r, this.g, this.b);
	}
}

/**
 * @const
 */
var gColors = [
	new TColor(0, 150, 200),
	new TColor(255, 25, 50),
	new TColor(125, 200, 0),
	new TColor(255, 255, 35),
	new TColor(150, 0, 150),
	new TColor(255, 125, 0)
];

/**
 * @constructor
 * @param {number} aX
 * @param {number} aY
 * @param {number} aWaitTime
 */
function TField(aX, aY, aWaitTime) {
	this.xPos = aX;
	this.yPos = aY;
	this.WaitTime = aWaitTime;
	this.NewColor = gColors[random(gColors.length)].clone();
	this.CurrentColor = new TColor(0x19, 0x38, 0x19);
	this.Processed = false;
}

TField.prototype.setNewColor = function (newColor) {
	this.NewColor = newColor;
	this.WaitTime = -Math.sqrt(this.xPos * this.xPos + this.yPos * this.yPos) / 4;
	this.Processed = true;
}

TField.prototype.update = function () {
	if (this.WaitTime < 0) this.WaitTime += 1;

	if (this.WaitTime >= 0) {
		if (this.CurrentColor.asString() != this.NewColor.asString()) {
			var limit = 2;
			var diff = ((this.NewColor.r - this.CurrentColor.r) / 3);
			if (Math.abs(diff) > limit) this.CurrentColor.r += ~~diff;
			else this.CurrentColor.r = this.NewColor.r;

			var diff = ((this.NewColor.g - this.CurrentColor.g) / 3);
			if (Math.abs(diff) > limit) this.CurrentColor.g += ~~diff;
			else this.CurrentColor.g = this.NewColor.g;

			var diff = ((this.NewColor.b - this.CurrentColor.b) / 3);
			if (Math.abs(diff) > limit) this.CurrentColor.b += ~~diff;
			else this.CurrentColor.b = this.NewColor.b;
			return true;
		}
	}
	return false;
}

/**
 * @param {number} x
 * @param {number} y
 * @param {number} size
 */
TField.prototype.paint = function (x, y, size) {
	gContext.fillStyle = this.CurrentColor.asString();
	gContext.fillRect(x, y, size, size);
}

/**
 * @constructor
 * @extends TControl
 * @param {number} aLeft
 * @param {number} aTop
 * @param {number} aWidth
 * @param {number} aHeight
 */
function TGameGrid(aLeft, aTop, aWidth, aHeight) {
	this.Fields = [];
	this.Size = 14;
	TControl.call(this, "", aLeft, aTop, aWidth, aHeight);
	this.FieldSize = ~~ (this.Width / this.Size);
	this.initField();
}
TGameGrid.prototype = Object.create(TControl.prototype);
TGameGrid.prototype.constructor = TGameGrid;

TGameGrid.prototype.initField = function () {
	this.Fields = [];
	var xCenter = this.Size / 2;
	var yCenter = this.Size / 2;
	this.Fields = new Array(this.Size);
	for (var x = 0; x < this.Size; x++) {
		this.Fields[x] = new Array(this.Size);
		for (y = 0; y < this.Size; y++) {
			var WaitTime = (-2 * Math.round(Math.sqrt((xCenter - x) * (xCenter - x) + (yCenter - y) * (yCenter - y))));
			this.Fields[x][y] = new TField(x, y, WaitTime);
		}
	}
}

TGameGrid.prototype.paint = function () {
	if (!this.getVisible()) return;
	var x0 = this.getLeft();
	var y0 = this.getTop();
	for (var y = 0; y < this.Size; y++) {
		for (var x = 0; x < this.Size; x++) {
			this.Fields[y][x].paint(x0 + x * this.FieldSize, y0 + y * this.FieldSize, this.FieldSize);
		}
	}
}

/**
 * @return {boolean}
 */
TGameGrid.prototype.update = function () {
	if (!this.getVisible()) return false;
	for (var y = 0; y < this.Size; y++) {
		for (var x = 0; x < this.Size; x++) {
			if (this.Fields[y][x].update()) this.NeedRepaint = true;
		}
	}
	return TControl.prototype.update.call(this);
}

/**
 * @return {boolean}
 */
TGameGrid.prototype.isUniColor = function () {
	var color = this.Fields[0][0].NewColor.asString();
	for (var y = 0; y < this.Size; y++) {
		for (var x = 0; x < this.Size; x++) {
			if (this.Fields[y][x].NewColor.asString() != color) return false;
		}
	}
	return true;
}

/**
 * @return {number}
 */
TGameGrid.prototype.countColors = function () {
	var uniqueColors = [];
	for (var y = 0; y < this.Size; y++) {
		for (var x = 0; x < this.Size; x++) {
			var color = this.Fields[y][x].NewColor.asString();
			var found = false;
			for (var i = 0; i < uniqueColors.length; i++) {
				if (uniqueColors[i] == color) {
					found = true;
					break;
				}
			}
			if (!found) uniqueColors.push(color);
		}
	}
	return uniqueColors.length;
}

TGameGrid.prototype.floodFill = function (targetColor) {
	this.fill(0, 0, this.Fields[0][0].NewColor, targetColor);
	this.NeedRepaint = true;
	for (var y = 0; y < this.Size; y++)
		for (var x = 0; x < this.Size; x++) this.Fields[y][x].Processed = false;
}

TGameGrid.prototype.fill = function (xPos, yPos, startColor, targetColor) {
	if ((xPos < 0) || (xPos >= this.Size)) return;
	if ((yPos < 0) || (yPos >= this.Size)) return;
	if (this.Fields[xPos][yPos].Processed) return;

	if (this.Fields[xPos][yPos].NewColor.asString() == startColor.asString()) {
		this.Fields[xPos][yPos].setNewColor(targetColor);
		this.fill(xPos, yPos + 1, startColor, targetColor);
		this.fill(xPos - 1, yPos, startColor, targetColor);
		this.fill(xPos + 1, yPos, startColor, targetColor);
		this.fill(xPos, yPos - 1, startColor, targetColor);
	}
}

TGameGrid.prototype.newGame = function () {}

/**
 * @const
 */
var MAX_MOVES = 25

/**
 * @constructor
 */
	function TStatistic() {
		this.Played = 0;
		this.Won = 0;
		this.WonStat = [];
		this.load();
	}

	/**
	 * @return {number}
	 */
TStatistic.prototype.getLost = function () {
	var Won = 0;
	for (var i = 0; i < this.WonStat.length - 1; i++) Won += this.WonStat[i];
	return this.WonStat[MAX_MOVES] - Won;
}

/**
 * @return {number}
 */
TStatistic.prototype.getWon = function () {
	var Won = 0;
	for (var i = 0; i < this.WonStat.length - 1; i++) Won += this.WonStat[i];
	return Won;
}

/**
 * @return {number}
 */
TStatistic.prototype.getPlayed = function () {
	return this.WonStat[MAX_MOVES];
}

TStatistic.prototype.gameStarted = function () {
	this.WonStat[MAX_MOVES] += 1;
	this.save();
}

/**
 * @param {number} aMoves
 */
TStatistic.prototype.gameWon = function (aMoves) {
	if ((aMoves - 1 < 0) || (aMoves >= this.WonStat.length)) return;
	this.WonStat[aMoves - 1] += 1;
	this.save();
}

TStatistic.prototype.load = function () {
	var cookies = document.cookie.split(";");
	for (var i = 0; i < cookies.length; i++) {
		var name = cookies[i].substr(0, cookies[i].indexOf("="));
		var value = cookies[i].substr(cookies[i].indexOf("=") + 1);
		name = name.replace(/^\s+|\s+$/g, "");
		if (name == "floodit_statistic") {
			this.WonStat = JSON.parse(value);
			break;
		}
	}
	if (this.WonStat.length != MAX_MOVES + 1) {
		this.WonStat = [];
		this.WonStat.length = MAX_MOVES + 1;
		for (var i = 0; i < this.WonStat.length; i++) this.WonStat[i] = 0;
	}
	for (var i = 0; i < this.WonStat.length; i++)
		if (this.WonStat[i] == null) this.WonStat[i] = 0;

	var Played = this.WonStat[MAX_MOVES];
	var Won = 0;
	for (var i = 0; i < this.WonStat.length - 1; i++) Won += this.WonStat[i];
	if (Played < Won) {
		this.WonStat = [];
		this.WonStat.length = MAX_MOVES + 1;
		for (var i = 0; i < this.WonStat.length; i++) this.WonStat[i] = 0;
	}
}

TStatistic.prototype.save = function () {
	var expiryDate = new Date();
	expiryDate.setDate(expiryDate.getDate() + 100000);
	sExpiry = "; expires=" + expiryDate.toUTCString();
	document.cookie = "floodit_statistic=" + JSON.stringify(this.WonStat) + sExpiry;
}


/**
 * @constructor
 */
function TFlooditGame() {
	var self = this;
	this.LastID = -1;
	this.Fills = 0;

	this.NewGame = function () {
		this.CantWinLabel.hide();
		this.GamOverLabel.hide();
		this.LastID = -1;
		this.Fills = 0;
		this.FillsLabel.setCaption("Fills: " + this.Fills + "/" + MAX_MOVES);
		for (var i = 0; i < this.ColorButtons.length; i++) this.ColorButtons[i].enable();
		this.GameGrid.initField();
	}

	this.ShowStatistic = function () {
		this.GamePanel.disable();

		this.StatPlayedLabel.setCaption(this.Statistic.getPlayed().toString());
		this.StatWonLabel.setCaption(this.Statistic.getWon().toString());
		this.StatLostLabel.setCaption(this.Statistic.getLost().toString());
		for (var i = MAX_MOVES; i > 15; i--) this.WonLabels[i].setCaption(this.Statistic.WonStat[i - 1].toString());

		this.StatisticPanel.Alpha = 0.1;
		this.StatisticPanel.show();
	}

	this.CloseStatistic = function () {
		if (!this.StatisticPanel.Visible) return;
		this.StatisticPanel.hide();
		this.GamePanel.enable();
	}

	this.gameOver = function (victory) {
		this.CantWinLabel.hide();
		for (var i = 0; i < this.ColorButtons.length; i++) this.ColorButtons[i].disable();
		if (victory) this.GamOverLabel.setCaption("You won.");
		else this.GamOverLabel.setCaption("You lost.");
		this.GamOverLabel.show();
	}

	this.FillButtonClicked = function (aCaption, aID) {
		if (this.LastID == aID) return;
		this.LastID = aID;
		if (this.Fills == 0) this.Statistic.gameStarted();
		this.Fills += 1;
		this.FillsLabel.setCaption("Fills: " + this.Fills + "/" + MAX_MOVES);
		this.GameGrid.floodFill(gColors[aID]);

		if (this.GameGrid.countColors() >= (MAX_MOVES - this.Fills)) {
			var x = random(3);
			if (x == 0) this.CantWinLabel.setCaption("You will lose");
			else if (x == 1) this.CantWinLabel.setCaption("You can't win");
			else this.CantWinLabel.setCaption("You have no chance");
			this.CantWinLabel.show();
		}
		if (this.GameGrid.isUniColor()) {
			this.Statistic.gameWon(this.Fills);
			this.gameOver(true);
		} else if (this.Fills >= MAX_MOVES) this.gameOver(false);
	}

	
	var processing = false;
	var BorderWidth = 20;
	var ButtonWidth = 127;
	var ButtonHeight = 34;

	this.Statistic = new TStatistic();

	this.GamePage = new TPanel(0, 0, gCanvasWidth, gCanvasHeight);
	this.GamePage.setAlpha(0);
	this.GamePanel = new TPanel(0, 0, gCanvasWidth, gCanvasHeight);
	this.GamePage.addControl(this.GamePanel);
	this.GamePanel.setColor(new TColor(0x19, 0x38, 0x19));
	this.CaptionLabel = new TLabel("Flood it", gCanvasWidth / 2, 40);
	this.CaptionLabel.Font.Size = 34;
	this.CaptionLabel.Font.Bold = true;
	this.CaptionLabel.showShadow(new TColor(00, 255, 00), 0, 0, 10);
	this.GamePanel.addControl(this.CaptionLabel);

	this.FillsLabel = new TLabel("Fills: 0/" + MAX_MOVES, gCanvasWidth / 2, 235, TTextAlignment.taCenter);
	this.FillsLabel.Font.Size = 25;
	this.GamePanel.addControl(this.FillsLabel);
	this.GamePanel.addControl(new TFloodItButton("Statistic", gCanvasWidth - (BorderWidth + ButtonWidth), 215, ButtonWidth, ButtonHeight, this.ShowStatistic.bind(this)));
	this.GamePanel.addControl(new TFloodItButton("New game", BorderWidth, 215, ButtonWidth, ButtonHeight, this.NewGame.bind(this)));
	this.GamePanel.addControl(new TLabel("Fill the entire board with the same color with " + MAX_MOVES + " flood fills or less.", gCanvasWidth / 2, 80));
	this.GamePanel.addControl(new TLabel("Click on the buttons above to fill the board below.", gCanvasWidth / 2, 175));
	this.GamePanel.addControl(new TLabel("Filling always starts at the top left corner of the board.", gCanvasWidth / 2, 190));

	var ButtonWidth = ~~ ((gCanvasWidth - 2 * BorderWidth - (gColors.length - 1) * 2) / gColors.length);
	var ButtonHeight = 50;
	this.ColorButtons = [];
	for (var i = 0; i < gColors.length; i++) this.ColorButtons.push(new TColorButton(gColors[i], BorderWidth + i * (ButtonWidth + 2), 100, ButtonWidth, ButtonHeight, this.FillButtonClicked.bind(this), i));
	for (var i = 0; i < this.ColorButtons.length; i++) this.GamePanel.addControl(this.ColorButtons[i]);

	this.GameGrid = new TGameGrid(BorderWidth, 266, gCanvasWidth - 2 * BorderWidth, gCanvasWidth - 2 * BorderWidth);
	this.GamePanel.addControl(this.GameGrid);
	this.GamOverLabel = new TGameOverLabel("Game over", gCanvasWidth / 2, gCanvasHeight / 2);
	this.GamOverLabel.hide();
	this.GamePanel.addControl(this.GamOverLabel);

	this.CantWinLabel = new TLabel("You will lose.", gCanvasWidth / 2, 130);
	this.CantWinLabel.Font.Size = 40;
	this.CantWinLabel.Font.Bold = true;
	this.CantWinLabel.FontColor = new TColor(25, 56, 25);
	this.CantWinLabel.hide();
	this.GamePanel.addControl(this.CantWinLabel);

	this.StatisticPanel = new TStatPanel(70, 200, gCanvasWidth - 140, 400);
	this.StatisticPanel.addControl(new TFloodItButton("Close", (this.StatisticPanel.Width - 127) / 2, 400 - 34 - 20, 127, 34, this.CloseStatistic.bind(this)));
	this.StatisticLabel = new TLabel("Statistic", this.StatisticPanel.Width / 2, 30, TTextAlignment.taCenter);
	this.StatisticLabel.Font.Size = 25;
	this.StatisticLabel.Font.Bold = true;
	this.StatisticPanel.addControl(this.StatisticLabel);
	this.GamePage.addControl(this.StatisticPanel);
	this.StatisticPanel.hide();

	this.WonLabels = [];
	this.WonLabels.length = MAX_MOVES + 1;
	this.StatisticPanel.addControl(new TLabel("Games played:", 20, 60, TTextAlignment.taLeft));
	this.StatisticPanel.addControl(new TLabel("Games won:", 20, 80, TTextAlignment.taLeft));
	this.StatisticPanel.addControl(new TLabel("Games lost:", 20, 100, TTextAlignment.taLeft));

	this.StatPlayedLabel = new TLabel("0", this.StatisticPanel.Width - 20, 60, TTextAlignment.taRight);
	this.StatWonLabel = new TLabel("0", this.StatisticPanel.Width - 20, 80, TTextAlignment.taRight);
	this.StatLostLabel = new TLabel("0", this.StatisticPanel.Width - 20, 100, TTextAlignment.taRight);
	this.StatisticPanel.addControl(this.StatPlayedLabel);
	this.StatisticPanel.addControl(this.StatWonLabel);
	this.StatisticPanel.addControl(this.StatLostLabel);

	for (var i = MAX_MOVES; i > 15; i--) {
		this.StatisticPanel.addControl(new TLabel("Games won with " + i + " moves:", 20, 140 + 20 * (MAX_MOVES - i), TTextAlignment.taLeft));
		this.WonLabels[i] = new TLabel("0", this.StatisticPanel.Width - 20, 140 + 20 * (MAX_MOVES - i), TTextAlignment.taRight);
		this.StatisticPanel.addControl(this.WonLabels[i]);
	}

	var timer = setInterval(function () {
		self.tick();
	}, 50);

	this.update = function () {
		if (this.GamePage.update()) this.GamePage.paint();
	}

	this.mouseOut = function () {
		this.GamePage.mouseOut();
	}

	this.mouseMove = function (x, y) {
		this.GamePage.mouseMove(x, y);
	}

	this.mouseDown = function (left) {
		this.GamePage.mouseDown(left);
	}

	this.mouseUp = function (left) {
		this.GamePage.mouseUp(left);
	}

	this.tick = function () {
		if (processing) return;
		processing = true;
		try {
			this.update();
		} finally {
			processing = false;
		}
	}
}

function doMouseMove(e) {
	gCanvasLeft = gCanvasTag.offsetLeft;
	gCanvasTop = gCanvasTag.offsetTop;
	gMouse.X = e.pageX - gCanvasLeft;
	gMouse.Y = e.pageY - gCanvasTop;
	gFlooditGame.mouseMove(gMouse.X, gMouse.Y);
}

function doMouseOut(e) {
	gFlooditGame.mouseOut();
}

function doMouseDown(e) {
	if (e.which == 1) gFlooditGame.mouseDown(true);
	else if (e.which == 3) gFlooditGame.mouseDown(false);
}

function doMouseUp(e) {
	if (e.which == 1) gFlooditGame.mouseUp(true);
	else if (e.which == 3) gFlooditGame.mouseUp(false);
}

function doContextMenu(e) {
	e.preventDefault();
}

function doKeyDown(e) {
	if (e.keyCode == 27) gFlooditGame.CloseStatistic();
}

function doOnLoad() {
	gCanvasTag = document.getElementById('game_canvas');
	if (!gCanvasTag) return;
	gContext = gCanvasTag.getContext('2d');
	if (!gContext) return;

	gCanvasWidth = gCanvasTag.width;
	gCanvasHeight = gCanvasTag.height;
	gCanvasLeft = gCanvasTag.offsetLeft;
	gCanvasTop = gCanvasTag.offsetTop;

	gMouse = new TPoint(0, 0);
	gFlooditGame = new TFlooditGame();

	gContext.translate(0.5, 0.5);

	gCanvasTag.addEventListener("mousemove", doMouseMove, false);
	gCanvasTag.addEventListener("mouseout", doMouseOut, false);
	gCanvasTag.addEventListener("mousedown", doMouseDown, true);
	gCanvasTag.addEventListener("mouseup", doMouseUp, true);
	gCanvasTag.addEventListener("contextmenu", doContextMenu, false);
}

window.addEventListener('load', doOnLoad, false);
window.addEventListener("keypress", doKeyDown, true);