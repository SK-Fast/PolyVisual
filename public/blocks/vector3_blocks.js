Blockly.Blocks['vector3_create'] = {
    init: function() {
      this.jsonInit({
          "message0": "Construct Vector3 X %1 Y %2 Z %3",
          "args0": [
              {
              "type": "input_value",
              "name": "X",
              "check": "Number"
              },
              {
                "type": "input_value",
                "name": "Y",
                "check": "Number"
                },

                {
                    "type": "input_value",
                    "name": "Z",
                    "check": "Number"
                    },
          ],

          "output": "Vector3",
          "colour": "#592396"
  
          }
          
          );
    }
  };

  Blockly.Lua['vector3_create'] = function(block) {
    let xPos = Blockly.Lua.valueToCode(block, 'X',Blockly.Lua.ORDER_NONE) || '0';
    let yPos = Blockly.Lua.valueToCode(block, 'Y',Blockly.Lua.ORDER_NONE) || '0';
    let zPos = Blockly.Lua.valueToCode(block, 'Z',Blockly.Lua.ORDER_NONE) || '0';

    let code = `Vector3.new(${xPos},${yPos},${zPos})`;
    
    return [code, Blockly.Lua.ORDER_ADDITIVE];
  };

  Blockly.Blocks['vector3_getX'] = {
    init: function() {
      this.jsonInit({
          "message0": "Get X from %1",
          "args0": [
              {
              "type": "input_value",
              "name": "Vector3Obj",
              "check": "Vector3"
              },
          ],

          "output": "Number",
          "colour": "#592396"
  
          }
          
          );
    }
  };

  Blockly.Lua['vector3_getX'] = function(block) {
    let vector3obj = Blockly.Lua.valueToCode(block, 'Vector3Obj',Blockly.Lua.ORDER_NONE) || 'Vector3.New(0,0,0)';

    let code = `${vector3obj}.x`;
    
    return [code, Blockly.Lua.ORDER_ADDITIVE];
  };

  Blockly.Blocks['vector3_getY'] = {
    init: function() {
      this.jsonInit({
          "message0": "Get Y from %1",
          "args0": [
              {
              "type": "input_value",
              "name": "Vector3Obj",
              "check": "Vector3"
              },
          ],

          "output": "Number",
          "colour": "#592396"
  
          }
          
          );
    }
  };

  Blockly.Lua['vector3_getY'] = function(block) {
    let vector3obj = Blockly.Lua.valueToCode(block, 'Vector3Obj',Blockly.Lua.ORDER_NONE) || 'Vector3.New(0,0,0)';

    let code = `${vector3obj}.y`;
    
    return [code, Blockly.Lua.ORDER_ADDITIVE];
  };

  Blockly.Blocks['vector3_getZ'] = {
    init: function() {
      this.jsonInit({
          "message0": "Get Z from %1",
          "args0": [
              {
              "type": "input_value",
              "name": "Vector3Obj",
              "check": "Vector3"
              },
          ],

          "output": "Number",
          "colour": "#592396"
  
          }
          
          );
    }
  };

  Blockly.Lua['vector3_getZ'] = function(block) {
    let vector3obj = Blockly.Lua.valueToCode(block, 'Vector3Obj',Blockly.Lua.ORDER_NONE) || 'Vector3.New(0,0,0)';

    let code = `${vector3obj}.z`;
    
    return [code, Blockly.Lua.ORDER_ADDITIVE];
  };