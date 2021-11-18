
/**
 *  https://raw.githubusercontent.com/petronny/gfwlist2pac/master/gfwlist.pac
 */

function FindProxyForURL(url, host) {
    return 'SOCKS5 127.0.0.1:1080';
}