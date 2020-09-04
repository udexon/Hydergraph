var $SL = [],
    $xk;
function count(a) {
    return a.length;
}
function fgl_explode() {
    S.push(explode(S.pop(), S.pop()));
}
function fgl_now() {
    var d = new Date();
    S.push(d.toISOString());
}
function fgl_colon() {
    S.push(':');
}
function fgl_timeout() {
    setTimeout(eval("fgl_now"), S.pop());
    console.log("2019 1217 1421");
}
function func_num_args() {
}
function F() {
    var e;
    $count = 0;
    if (func_num_args() == 0) {
        return false;
    } else {
        for ($i = 0; $i < arguments.length - 1; $i++) {
            e = arguments[$i];
            S.push(e);
        }
        FGL(arguments[$i]);
    }
}
function fgl_je() {
    S.push(JSON.stringify(S.pop()));
}
function fgl_dup() {
    S.push(end(S));
}
function fgl_l() {
    $S = S;
    $SL[array_pop($S)] = $xk;
}
function end(a) {
    return a[a.length - 1];
}
function function_exists(f) {
    return (eval("typeof " + f) === "function");
}
function is_array(f) {
    return (typeof f === "object");
}
function isset(f) {
    return (typeof f === "undefined");
}
function substr(s, n, l) {
    return s.substr(n, l);
}
function fgl_ne() {
    $S = S;
    $n = array_pop($S);
    if ($n == 0) {
        e = eval("return " + array_pop($S) + "();");
        S.push(e);
    } else {
        if (0) {
            $s = array_pop($S) + "(" + "array_pop(\$S)";
            while ($n-- > 1) {
                $s = $s + ", " + "array_pop(\$S)";
            }
            e = eval("return " + $s + ");");
            S.push(e);
        } else {
            $s = array_pop($S) + "(" + array_pop($S);
            while ($n-- > 1) {
                $s = $s + ", " + "array_pop(\$S)";
            }
            console.log($s);
            e = eval($s + ")");
            S.push(e);
        }
    }
}
function ord(n) {
    return n.charCodeAt(0);
}
function strlen(s) {
    return s.length;
}
function in_array(e, a) {
    return (a.indexOf(e) != -1);
}
function array_keys(a) {
    return Object.keys(a);
}
function array_pop(s) {
    return s.pop();
}
function explode(c, a) {
    var s;
    s = a.split(c);
    return s;
}
function preg_replace(p, r, a) {
    return a.replace(p, r);
}
function fgl_nxhr() {
    S.push(new XMLHttpRequest());
}
function fgl_xo() {
    var a = S.pop();
    var xmlhttp = end(S);
    xmlhttp.open("POST", a, true);
}
function fgl_xsrqh() {
    var xmlhttp = end(S);
    xmlhttp.setRequestHeader("Content-type", "application/json");
}
function fgl_xsend() {
    var a = S.pop();
    var xmlhttp = end(S);
    xmlhttp.send(a);
}
function trim(a) {
    return a.trim();
}
function fgl_cl() {
    console.log(S.pop());
}
function fgl_s() {
    console.log(S);
}
function preProc(str) {
    S.push(str);
    fgl_xs();
    sa = S.pop();
    str1 = JSON.stringify(sa);
    alert('preProc ' + str1 + ' sa ' + sa + ' str ' + str);
    if (str.length == 0) {
        document.getElementById("txtHint").innerHTML = "";
        return;
    } else {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                alert("postProc_g() " + this.responseText);
                postProc_g(this.responseText);
            }
        };
        xmlhttp.open("POST", "fgl_ajax.php", true);
        xmlhttp.setRequestHeader("Content-type", "application/json");
        id = "rpbox";
        xmlhttp.send(str1);
    }
}
var $CDW = [],
    S = [],
    $v, s0 = "";
function FGL($a) {
    s0 = preg_replace('/\s+/', ' ', $a);
    var $a = explode(' ', trim(s0));
    var $SS = [],
        $xl = 0;
    $xk = 0;
    $xs = $a;
    $xl = count($a);
    $vk = $xk;
    $Z = $xl;
    S.push($vk);
    $t = array_pop(S);
    $CC = $t[0];
    do {
        $vk = $xk;
        $v = trim($xs[$xk]);
        if (in_array($v, array_keys($CDW))) {
            $WA = $CDW[$v];
            array_pop($WA);
            FGLA($WA);
        } else if ($v == ">:" || $v == "<:") {
            S.push($v);
        } else {
            $l = strlen($v);
            if ($v[0] == ":" && $l == 1) {
                $xk++;
                $vk = $xk;
                $v = trim($xs[$xk]);
                $CDW[$v] = [];
                $w0 = $v;
                $xk++;
                do {
                    $vk = $xk;
                    $v = trim($xs[$xk]);
                    $CDW[$w0].push($v);
                    $l = strlen($v);
                    if ($v[0] == ";" && $l == 1) {
                        break;
                    }
                    $xk++;
                } while (1);
            } else if ($v[$l - 1] == ":") {
                $l = strlen($v);
                $fn = substr($v, 0, $l - 1);
                if (function_exists("fgl_" + $fn)) {
                    eval("fgl_" + $fn + "()");
                    if (is_array(end(S))) {
                        $va = end(S);
                        if (isset($va[0]))
                            if ($va[0] == "prg_ctr") {
                                $va = array_pop(S);
                                $vk = $va[1];
                                $xk = $vk;
                            }
                    }
                } else if (in_array($fn + ":", array_keys($CDW))) {
                    $WA = $CDW[$fn + ":"];
                    array_pop($WA);
                    FGLA($WA);
                } else if ($fn == "r") {
                    $s = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$S[]=$' + $s + '; ');
                    S.push(':r:');
                    fgl_s();
                } else if ($fn == "v") {
                    $sa = array_pop(S);
                    $sb = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$' + $sa + '=' + $sb + '; ');
                    S.push(':v:');
                    fgl_s();
                } else if ($fn == "a") {
                    $sa = array_pop(S);
                    $sc = count(S);
                    $se = S[$sc - $sa];
                    for ($si = 0; $si < $sa; $si++) {
                    }
                    $sb = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$' + $sa + '=' + $sb + '; ');
                    S.push(':v:');
                    fgl_s();
                } else if ($fn == "count") {
                    fgl_s();
                    S.push('$S[]=count(' + array_pop(S) + '); ');
                } else if ($fn == "bz") {
                    fgl_s();
                    $bx = array_pop(S);
                    if (array_pop(S) == 0) $xk = $bx;
                    continue;
                } else if ($fn == "bnz") {
                    $bx = $SL[array_pop($S)];
                    fgl_dup();
                    if (array_pop(S) != 0) {
                        $xk = $bx + 1;
                        continue;
                    }
                } else {}
            } else {
                if (ord($v) == 0);
                else
                if ($v[0] == '_') {
                    if ($v == '_') S.push($v);
                } else {
                    if ($v == '.s') {
                        fgl_s();
                    } else {
                        if ($v == '-') {
                            $sa = array_pop(S);
                            $sb = array_pop(S);
                            S.push($sb - $sa);
                        } else if ($v == '+') {
                            console.log(' < in + >');
                            $sa = array_pop(S);
                            $sb = array_pop(S);
                            console.log(' < in + > ' + $sa + ' ' + $sb + ' ' + ($sa + $sb));
                            S.push(parseInt($sb) + parseInt($sa));
                        } else if ($v == '.') {
                            array_pop(S);
                        } else {
                            if ($v == '===') {
                                S.push(array_pop(S) === array_pop(S));
                            } else {
                                S.push($v);
                            }
                        }
                    }
                }
            }
        }
        $xk++;
        if ($xk >= $xl) break;
    }
    while ($vk < $xl);
}
function FGLA($a) {
    console.log($a);
    var $SS = [],
        $xk = 0,
        $xl = 0;
    $xs = $a;
    console.log($xs);
    $xl = count($a);
    $vk = $xk;
    $Z = $xl;
    S.push($vk);
    $t = array_pop(S);
    $CC = $t[0];
    do {
        $vk = $xk;
        $v = trim($xs[$xk]);
        console.log($v + ' vk ' + $vk + ' xl ' + $xl + ' S ' + S);
        if (in_array($v, array_keys($CDW))) {
            $WA = $CDW[$v];
            array_pop($WA);
            FGLA($WA);
        } else if ($v == ">:" || $v == "<:") {
            S.push($v);
        } else {
            $l = strlen($v);
            if ($v[0] == ":" && $l == 1) {
                $xk++;
                $vk = $xk;
                $v = trim($xs[$xk]);
                $CDW[$v] = [];
                $w0 = $v;
                $xk++;
                do {
                    $vk = $xk;
                    $v = trim($xs[$xk]);
                    $CDW[$w0].push($v);
                    $l = strlen($v);
                    if ($v[0] == ";" && $l == 1) {
                        break;
                    }
                    $xk++;
                } while (1);
            } else if ($v[$l - 1] == ":") {
                $l = strlen($v);
                $fn = substr($v, 0, $l - 1);
                console.log(function_exists("fgl_" + $fn) + ' ' + ("fgl_" + $fn));
                if (function_exists("fgl_" + $fn)) {
                    eval("fgl_" + $fn + "()");
                    if (is_array(end(S))) {
                        $va = end(S);
                        if (isset($va[0]))
                            if ($va[0] == "prg_ctr") {
                                $va = array_pop(S);
                                $vk = $va[1];
                                $xk = $vk;
                            }
                    }
                } else if (in_array($fn + ":", array_keys($CDW))) {
                    $WA = $CDW[$fn + ":"];
                    array_pop($WA);
                    FGLA($WA);
                } else if ($fn == "r") {
                    $s = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$S[]=$' + $s + '; ');
                    S.push(':r:');
                    fgl_s();
                } else if ($fn == "v") {
                    $sa = array_pop(S);
                    $sb = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$' + $sa + '=' + $sb + '; ');
                    S.push(':v:');
                    fgl_s();
                } else if ($fn == "a") {
                    $sa = array_pop(S);
                    $sc = count(S);
                    $se = S[$sc - $sa];
                    for ($si = 0; $si < $sa; $si++) {
                    }
                    $sb = array_pop(S);
                    S.push(implode(' ', array_slice($xs, $xk + 1)));
                    S.push('$' + $sa + '=' + $sb + '; ');
                    S.push(':v:');
                    fgl_s();
                } else if ($fn == "count") {
                    fgl_s();
                    S.push('$S[]=count(' + array_pop(S) + '); ');
                } else if ($fn == "bz") {
                    fgl_s();
                    $bx = array_pop(S);
                    if (array_pop(S) == 0) $xk = $bx;
                    continue;
                } else if ($fn == "bnz") {
                    $bx = $SL[array_pop($S)];
                    fgl_dup();
                    if (array_pop(S) != 0) {
                        $xk = $bx + 1;
                        continue;
                    }
                } else {}
            } else {
                if (ord($v) == 0);
                else
                if ($v[0] == '_') {
                    if ($v == '_') S.push($v);
                } else {
                    if ($v == '.s') {
                        fgl_s();
                    } else {
                        if ($v == '-') {
                            $sa = array_pop(S);
                            $sb = array_pop(S);
                            S.push($sb - $sa);
                        } else if ($v == '+') {
                            console.log(' < in + >');
                            $sa = array_pop(S);
                            $sb = array_pop(S);
                            console.log(' < in + > ' + $sa + ' ' + $sb + ' ' + ($sa + $sb));
                            S.push(parseInt($sb) + parseInt($sa));
                        } else if ($v == '.') {
                            array_pop(S);
                        } else {
                            if ($v == '===') {
                                S.push(array_pop(S) === array_pop(S));
                            } else {
                                S.push($v);
                            }
                        }
                    }
                }
            }
        }
        $xk++;
        if ($xk >= $xl) break;
    }
    while ($vk < $xl);
}
