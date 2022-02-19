Blockly.Blocks['color_create'] = {
  init: function() {
    this.jsonInit({
        "message0": "Construct Color R %1 G %2 B %3 A %4",
        "args0": [
            {
            "type": "input_value",
            "name": "R",
            "check": "Number"
            },
            {
              "type": "input_value",
              "name": "G",
              "check": "Number"
              },

              {
                "type": "input_value",
                "name": "B",
                "check": "Number"
                },

                {
                  "type": "input_value",
                  "name": "A",
                  "check": "Number"
                  },
        ],

        "output": "Color",
        "colour": "#842d87"

        }
        
        );
  }
};

Blockly.Lua['color_create'] = function(block) {
  let rPos = Blockly.Lua.valueToCode(block, 'R',Blockly.Lua.ORDER_NONE) || '0';
  let gPos = Blockly.Lua.valueToCode(block, 'G',Blockly.Lua.ORDER_NONE) || '0';
  let bPos = Blockly.Lua.valueToCode(block, 'B',Blockly.Lua.ORDER_NONE) || '0';
  let aPos = Blockly.Lua.valueToCode(block, 'A',Blockly.Lua.ORDER_NONE) || '0';

  let code = `Color.new(${rPos},${gPos},${bPos},${aPos})`;
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['color_fromHex'] = {
  init: function() {
    this.jsonInit({
        "message0": "Construct Color from HEX %1",
        "args0": [
            {
            "type": "input_value",
            "name": "HEX",
            },
            
        ],

        "output": "Color",
        "colour": "#842d87"

        }
        
        );
  }
};

Blockly.Lua['color_fromHex'] = function(block) {
  let hex = Blockly.Lua.valueToCode(block, 'HEX',Blockly.Lua.ORDER_NONE) || '#fff';

  let code = `Color.FromHex(${hex})`;
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['color_fromPicker'] = {
  init: function() {
    this.jsonInit({
        "message0": "Construct Color from   %1",
        "args0": [
            {
            "type": "field_colour",
            "name": "HEX",
            },
            
        ],

        "output": "Color",
        "colour": "#842d87"

        }
        
        );
  }
};

Blockly.Lua['color_fromPicker'] = function(block) {
  let hex = Blockly.Lua.valueToCode(block, 'HEX',Blockly.Lua.ORDER_NONE) || '#fff';

  let code = `Color.FromHex('${hex}')`;
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['color_getR'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get R from %1",
        "args0": [
            {
            "type": "input_value",
            "name": "ColorObj",
            "check": "Color"
            },
        ],

        "output": "Color",
        "colour": "#842d87"

        }
        
        );
  }
};

Blockly.Lua['color_getR'] = function(block) {
  let vector3obj = Blockly.Lua.valueToCode(block, 'ColorObj',Blockly.Lua.ORDER_NONE) || 'Color.New(0,0,0,0)';

  let code = `${vector3obj}.r`;
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};


Blockly.Blocks['color_getG'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get G from %1",
        "args0": [
            {
            "type": "input_value",
            "name": "ColorObj",
            "check": "Color"
            },
        ],

        "output": "Color",
        "colour": "#842d87"

        }
        
        );
  }
};

Blockly.Lua['color_getG'] = function(block) {
  let vector3obj = Blockly.Lua.valueToCode(block, 'ColorObj',Blockly.Lua.ORDER_NONE) || 'Color.New(0,0,0,0)';

  let code = `${vector3obj}.g`;
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};


Blockly.Blocks['color_getB'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get B from %1",
        "args0": [
            {
            "type": "input_value",
            "name": "ColorObj",
            "check": "Color"
            },
        ],

        "output": "Color",
        "colour": "#842d87"

        }
        
        );
  }
};

Blockly.Lua['color_getB'] = function(block) {
  let vector3obj = Blockly.Lua.valueToCode(block, 'ColorObj',Blockly.Lua.ORDER_NONE) || 'Color.New(0,0,0,0)';

  let code = `${vector3obj}.b`;
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['color_getA'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get A from %1",
        "args0": [
            {
            "type": "input_value",
            "name": "ColorObj",
            "check": "Color"
            },
        ],

        "output": "Color",
        "colour": "#842d87"

        }
        
        );
  }
};

Blockly.Lua['color_getA'] = function(block) {
  let vector3obj = Blockly.Lua.valueToCode(block, 'ColorObj',Blockly.Lua.ORDER_NONE) || 'Color.New(0,0,0,0)';

  let code = `${vector3obj}.a`;
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};
