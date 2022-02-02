Blockly.Blocks['instance_create'] = {
  init: function() {
    this.jsonInit({
        "message0": "Create Object %1",
        "args0": [
          {
              "type": "input_value",
              "name": "INSTANCE_NAME",
              "check": "String"
            },
        ],
        "output": "GameInstance",

        "colour": "#ff4a4a",
        "helpUrl": "https://docs.polytoria.com/classes/Instance/Static%20functions/New/"

        }

        );
  }
};

Blockly.Blocks['instance_getChild'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Child named %1 in %2",
        "args0": [
          {
            "type": "input_value",
            "name": "OBJECT_NAME",
            "check": "String"
          },

          {
            "type": "input_value",
            "name": "TARGET_OBJECT",
            "check": "GameInstance"
          },
        ],
        "output": "GameInstance",

        "colour": "#ff4a4a",

        }

        );
  }
};

Blockly.Blocks['instance_getAllChild'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Children in %1",

        "args0": [
          {
              "type": "input_value",
              "name": "OBJECT_NAME",
              "check": "GameInstance"
            },
        ],
       
        "output": "Array",

        "colour": "#ff4a4a",

        }

        );
  }
};

Blockly.Blocks['instance_getParent'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get parent of %1",
        "args0": [
          {
              "type": "input_value",
              "name": "OBJECT_NAME",
              "check": "GameInstance"
            },
        ],
        "output": "GameInstance",

        "colour": "#ff4a4a",

        }

        );
  }
};

Blockly.Blocks['instance_property'] = {
    init: function() {
      this.jsonInit({
          "message0": "Set Object %1 's %2 to %3",
          "args0": [
              {
              "type": "input_value",
              "name": "VAR",
              "check": "GameInstance"
              },
              {
              "type": "input_value",
              "name": "PROPERTY_VAL",
              "check": "String"

              },
              {
              "type": "input_value",
              "name": "VALUE",
    
              },
          ],
          "previousStatement": "Action",
              "nextStatement": "Action",
          "colour": "#ff4a4a"
  
          }
          
          );
    }
  };
  
  Blockly.Blocks['instance_getproperty'] = {
    init: function() {
      this.jsonInit({
          "message0": "Get Object %1 's Property named %2",
          "args0": [
              {
              "type": "input_value",
              "name": "TARGET_OBJECT",
              "check": "GameInstance"
              },
              {
              "type": "input_value",
              "name": "PROPERTY_NAME",
              "previousStatement": "Action",
              "nextStatement": "Action",
              },
          ],
          "output": "Any",

          "colour": "#ff4a4a"
  
          }
          
          );
    }
  };

  Blockly.Blocks['instance_setParent'] = {
    init: function() {
      this.jsonInit({
          "message0": "Set Object %1 's Parent to %2",
          "args0": [
              {
              "type": "input_value",
              "name": "TARGET_OBJECT",
              "check": "GameInstance"
              },
              {
              "type": "input_value",
              "name": "VALUE_OBJECT",
              "check": "GameInstance",
              "previousStatement": "Action",
              "nextStatement": "Action",
              },
          ],

          "previousStatement": "Action",
          "nextStatement": "Action",
          "colour": "#ff4a4a"
  
          }
          
          );
    }
  };
  
  Blockly.Lua['instance_create'] = function(block) {
    let subString = Blockly.Lua.valueToCode(block, 'INSTANCE_NAME',Blockly.Lua.ORDER_NONE) || '\'\'';

    let code = "Instance.new" + '(' + subString + ')';
    
    return [code, Blockly.Lua.ORDER_ADDITIVE];
  };

  Blockly.Lua['instance_getAllChild'] = function(block) {
    let subString = Blockly.Lua.valueToCode(block, 'OBJECT_NAME',Blockly.Lua.ORDER_NONE) || '\'\'';
    let code = subString+ ":GetChildren()";
    
    return [code, Blockly.Lua.ORDER_ADDITIVE];
  };

  Blockly.Lua['instance_setParent'] = function(block) {
    let subString = Blockly.Lua.valueToCode(block, 'VALUE_OBJECT',Blockly.Lua.ORDER_NONE) || '\'\'';
    let inString = Blockly.Lua.valueToCode(block, 'TARGET_OBJECT',Blockly.Lua.ORDER_NONE) || '\'\'';

    let code = inString + ":SetParent(" + subString + ")\n";
    
    return code;
  };
  
  
  Blockly.Lua['instance_getParent'] = function(block) {
    let subString = Blockly.Lua.valueToCode(block, 'OBJECT_NAME',Blockly.Lua.ORDER_NONE) || '\'\'';
    let code = subString + ".Parent";
    
    return [code, Blockly.Lua.ORDER_ADDITIVE];
  };
  

  Blockly.Lua['instance_getChild'] = function(block) {
    let subString = Blockly.Lua.valueToCode(block, 'OBJECT_NAME',Blockly.Lua.ORDER_NONE) || '\'\'';
    let inString = Blockly.Lua.valueToCode(block, 'TARGET_OBJECT',Blockly.Lua.ORDER_NONE) || '\'\'';
    let code = inString + "[" + subString + "]";
    
    return [code, Blockly.Lua.ORDER_ADDITIVE];
  };

  Blockly.Lua['instance_getproperty'] = function(block) {
    let subString = Blockly.Lua.valueToCode(block, 'PROPERTY_NAME',Blockly.Lua.ORDER_NONE) || '\'\'';
    let inString = Blockly.Lua.valueToCode(block, 'TARGET_OBJECT',Blockly.Lua.ORDER_NONE) || 'null';
    let code = inString + "." + subString.replace(/'/g,"");
    
    return [code, Blockly.Lua.ORDER_ADDITIVE];
  };
  
  
    Blockly.Lua['instance_property'] = function(block) {
      /*
      let varTag = block.getFieldValue('VAR');
      let propertyName = block.getFieldValue( 'PROPERTY_VAL');
      let propertyValue = block.getFieldValue('VALUE');
      */
  
      console.log(block)
  
      let varTag = Blockly.Lua.valueToCode(block, 'VAR',Blockly.Lua.ORDER_NONE);
      let propertyName = Blockly.Lua.valueToCode(block, 'PROPERTY_VAL',Blockly.Lua.ORDER_NONE);
      let propertyValue = Blockly.Lua.valueToCode(block, 'VALUE',Blockly.Lua.ORDER_NONE);
  
      if (varTag == "") {
        block.applyColour("#ff0000")
        return alert("Compile error: No object at instance_property block(see comment)")
      }
  
      let code = varTag + "." + propertyName.replace(/'/g,"") + " = " + propertyValue + "\n";
      
  
      return code;
    };