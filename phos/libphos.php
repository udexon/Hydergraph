<?php

function fgl_dup2()
{
    fgl_over();
    fgl_over();
}
function fgl_rsa4096()
{
    $config = array("digest_alg" => "sha512", "private_key_bits" => 4096, "private_key_type" => OPENSSL_KEYTYPE_RSA);
    global $S;
    $S[] = $config;
}
function fgl_pknew()
{
    global $S;
    $S[] = openssl_pkey_new(array_pop($S));
}
function fgl_pvk()
{
    global $S;
    openssl_pkey_export(array_pop($S), $privKey);
    $S[] = $privKey;
}
function fgl_pbk()
{
    global $S;
    $pubKey = openssl_pkey_get_details(array_pop($S));
    $S[] = $pubKey["key"];
}
function fgl_enc()
{
    global $S;
    openssl_public_encrypt(array_pop($S), $encrypted, array_pop($S));
    $S[] = $encrypted;
}
function fgl_dcr()
{
    global $S;
    openssl_private_decrypt(array_pop($S), $decrypted, array_pop($S));
    $S[] = $decrypted;
}
function fgl_b64e()
{
    global $S;
    $S[] = base64_encode(array_pop($S));
}
function fgl_b64d()
{
    global $S;
    $S[] = base64_decode(array_pop($S));
}
function fgl_orpb()
{
    global $S;
    $S[] = openssl_random_pseudo_bytes(array_pop($S));
}
function fgl_hex()
{
    global $S;
    $S[] = bin2hex(array_pop($S));
}
function fgl_SERVER()
{
    global $S;
    $S[] = $_SERVER;
}
function fgl_ssid()
{
    global $S;
    session_start();
    $S[] = "ssid2:" . session_id() . "_";
}
function fgl_shm()
{
    global $S;
    $a = array_pop($S);
    $shm_id = shmop_open(0xff3, "c", 0644, 100);
    if (!$shm_id) {
        echo "Couldn't create shared memory segment\n";
    }
    $shm_size = shmop_size($shm_id);
    echo "SHM Block Size: " . $shm_size . " has been created.\n";
    $shm_bytes_written = shmop_write($shm_id, $a, 0);
    if ($shm_bytes_written != strlen($a)) {
        echo "Couldn't write the entire length of data\n";
    }
    $S[] = "fgl_shm";
}
function fgl_date()
{
    global $S;
    $S[] = date("Ymd_His", array_pop($S));
}
function fgl_fmt()
{
    global $S;
    $S[] = filemtime(array_pop($S));
}
function fgl_dts()
{
    global $S;
    $d = new DateTime();
    $S[] = $d->format("Ymd_His");
}
function fgl_ak()
{
    global $S;
    $S[] = array_keys(array_pop($S));
}
function fgl_evs()
{
    global $S;
    echo var_src(array_pop($S));
}
function fgl_w480()
{
    global $S;
    system('ffmpeg -y -i v_in -vf "[in]scale=iw*min(480/iw\\,320/ih):ih*min(480/iw\\,320/ih)[scaled]; [scaled]pad=480:320:(480-iw*min(480/iw\\,320/ih))/2:(320-ih*min(480/iw\\,320/ih))/2[padded]; [padded]setsar=1:1[out]" -c:v libx264 -c:a copy ' . array_pop($S));
}
function fgl_res()
{
    global $S;
    system("ffprobe -v error -show_entries stream=width,height -of csv=p=0:s=x " . array_pop($S) . " > tmp_res");
}
function fgl_probe()
{
    global $S;
    system("ffprobe -i input.mkv -show_entries format 2>/dev/null | grep nb_streams > tmp_nb");
}
function fgl_mv()
{
    global $S, $SB, $xk, $BV;
    echo "  symlink sl: \n";
    $l = array_pop($S);
    $t = array_pop($S);
    rename($t, $l);
}
function fgl_sl()
{
    global $S, $SB, $xk, $BV;
    echo "  symlink sl: \n";
    $l = array_pop($S);
    $t = array_pop($S);
    echo "  {$t} {$l} ";
    exec("ln -fs '" . $t . "' {$l}");
}
function fgl_lsl()
{
    global $S, $SB, $xk, $BV;
    system("ls -l input.mkv");
}
function fgl_ife()
{
    global $S, $SB, $xk, $BV, $CDW;
    $cda = end($BV['CDW']);
    $tn = $cda[1];
    $cdw = $cda[0];
    echo "\n\n" . __FILE__ . " " . __FUNCTION__ . "  " . $CDW[$cdw][$tn + 1] . " " . $CDW[$cdw][$tn + 2] . "   ";
    echo var_src($BV);
    if (array_pop($S)) {
        F($CDW[$cdw][$tn + 1]);
    } else {
        F($CDW[$cdw][$tn + 2]);
    }
    $BV['skip'] = 2;
}
function fgl_ifeq()
{
    global $S, $SB, $xk, $BV, $CDW;
    $cda = end($BV['CDW']);
    $tn = $cda[1];
    $cdw = $cda[0];
    $a = array_pop($S);
    $b = array_pop($S);
    echo "\n\n" . __FILE__ . " " . __FUNCTION__ . "  {$a} {$b}  " . $CDW[$cdw][$tn + 1] . " " . $CDW[$cdw][$tn + 2] . "   ";
    echo var_src($BV);
    if ((int) $a == (int) $b) {
        F($CDW[$cdw][$tn + 1]);
    } else {
        F($CDW[$cdw][$tn + 2]);
    }
    $BV['skip'] = 2;
}
function fgl_fea()
{
    global $S, $SB, $xk, $BV;
    echo count(end($S));
    $tn = $BV['tn'] + 1;
    foreach (end($S) as $k => $a) {
        echo "\n" . $k . " " . $a . "  ";
        $S[] = $k;
        $S[] = $a;
        F($S[0][$tn]);
    }
    $BV['skip'] = 1;
}
function fgl_mpss()
{
    global $S;
    $f_out = array_pop($S);
    $t_l = array_pop($S);
    $t_s = array_pop($S);
    $f_in = array_pop($S);
    exec("ffmpeg -ss {$t_s} -i {$f_in} -t {$t_l} -vcodec copy -acodec copy {$f_out}");
}
function fgl_splav()
{
    global $S, $SB;
    exec("ffmpeg -y -i input.mkv -map 0:0 -vcodec copy o_video.mp4 -map 0:1 -acodec copy o_audio.webm");
}
function fgl_ffs()
{
    global $S, $SB;
    exec("ffmpeg -i video http://localhost:8090/feed.ffm");
}
function fgl_ffm()
{
    global $S, $SB;
    exec("ffmpeg -i video -i audio -c copy output.mkv");
}
function fgl_psb()
{
    global $S, $SB;
    $S[] = $SB;
}
function fgl_jecdw()
{
    global $CDW, $S;
    $S[] = json_encode($CDW);
}
function fgl_am()
{
    global $S;
    $S[] = array_merge(array_pop($S), array_pop($S));
}
function fgl_cdw()
{
    global $CDW, $S;
    $S[] = $CDW;
}
function fgl_cdwx()
{
    global $CDW, $S;
    $k = substr(array_pop($S), 1);
    $search_array = array('first' => 1, 'second' => 4);
    if (array_key_exists('first', $search_array)) {
        echo "The 'first' element is in the array";
    }
    $ca = $CDW[$k];
    while (1) {
        $cb = $ca;
        foreach ($ca as $ck => $e) {
            echo " " . $e . " ";
            if ($e != $k && array_key_exists($e, $CDW)) {
                $ca = $CDW[$e];
            }
        }
        if ($cb == $ca) {
            break;
        }
    }
    $S[] = $CDW[$k];
}
function fgl_cdwk()
{
    global $CDW, $S;
    fgl_s();
    $k = substr(array_pop($S), 1);
    echo "  cdwk: " . $k . "  ";
    echo json_encode($CDW[$k]);
    $S[] = $CDW[$k];
}
function fgl_lcdw()
{
    global $CDW, $S;
    $CDW = array_pop($S);
}
function fgl_gdf()
{
    global $CDW, $S;
    $S[] = get_defined_functions();
}
function fgl_aslice()
{
    global $S;
    $st = array_pop($S);
    $S[] = array_slice(array_pop($S), $st);
}
function fgl_a2cd()
{
    global $S, $CDW;
    $CDW[array_pop($S)] = array_pop($S);
}
function fgl_sc()
{
    global $S;
    $S[] = ';';
}
function fgl_apk()
{
    global $S;
    $k = array_pop($S);
    $b = array_pop($S);
    $l = count($S);
    $S[$l - 1][$k] = $b;
}
function fgl_ue()
{
    global $S;
    $S[] = urlencode(array_pop($S));
}
function fgl_fgt()
{
    global $S;
    $S[] = file_get_contents(array_pop($S));
}
function fgl_trim()
{
    global $S;
    $S[] = trim(array_pop($S));
}
function fgl_substr()
{
    global $S;
    $n = array_pop($S);
    $S[] = substr(array_pop($S), $n);
}
function fgl_post()
{
    global $S;
    $url = array_pop($S);
    $data = array_pop($S);
    $dje = json_encode($data);
    $options = array('http' => array('header' => "Content-type: application/x-www-form-urlencoded\r\n", 'method' => 'POST', 'content' => http_build_query($data)));
    $context = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    if ($result === FALSE) {
    }
    var_dump($result);
    $S[] = $result;
}
