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