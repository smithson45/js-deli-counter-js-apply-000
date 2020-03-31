var num = 0;
function takeANumber(katzDeliLine) {
  num++;
  katzDeliLine.push(num);
  return `Welcome. You are number ${katzDeliLine[-1]}.`;
  
}

function nowServing(x) {
  if (x.length === 0) {
    return 'There is nobody waiting to be served!';
  } else {
    var name = x[0];
    x.splice(0,1);
    return `Currently serving ${name}.`;
  }
}

function currentLine(newLine) {
  var line = [];
  if (newLine.length === 0) {
    return 'The line is currently empty.';
  } else {
    for (var i = 0; i < newLine.length; i++) {
      line += (i + 1) + ". " + newLine[i] + ", ";
    }
    line = line.slice(0, line.length-2);
    return `The line is currently: ${line}`;
  }
}