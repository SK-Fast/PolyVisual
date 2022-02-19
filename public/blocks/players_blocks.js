Blockly.Blocks['player_playerCount'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Players count",

        "colour": "#ffa136",
        "output": "Number"

        }

        );
  }
};

Blockly.Lua['player_playerCount'] = function(block) {
  let code = '#game["Players"]:GetPlayers()';
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['player_getAllPlayers'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Players",

        "colour": "#ffa136",
        "output": "Array"

        }

        );
  }
};

Blockly.Lua['player_getAllPlayers'] = function(block) {
  let code = 'game["Players"]:GetPlayers()';
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['player_playerJoined'] = {
  init: function() {
    this.jsonInit({
        "message0": "On player joined %1",
        "args0": [
          {
              "type": "input_statement",
              "name": "FUNCTION",
            },
        ],

        "colour": "#ffa136",
        "previousStatement": "Action",
          "nextStatement": "Action",

        }

        );
  }
};

Blockly.Lua['player_playerJoined'] = function(block) {
  let subString = Blockly.Lua.statementToCode(block, 'FUNCTION') || '';
  let code = "game[\"Players\"].PlayerAdded:Connect(function(plr)\n" + subString +"\nend)\n";
  return code;
};

Blockly.Blocks['player_getJoinedPlr'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Joined Player",

        "colour": "#ffa136",
        "output": "GameInstance"

        }

        );
  }
};

Blockly.Lua['player_getJoinedPlr'] = function(block) {
  let code = 'plr';
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};

Blockly.Blocks['player_getLocalPlr'] = {
  init: function() {
    this.jsonInit({
        "message0": "Get Local Player",

        "colour": "#ffa136",
        "output": "GameInstance"

        }

        );
  }
};

Blockly.Lua['player_getLocalPlr'] = function(block) {
  let code = 'game["Players"].LocalPlayer';
  
  return [code, Blockly.Lua.ORDER_ADDITIVE];
};