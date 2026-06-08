function FindProxyForURL(url, host) {

    var p1 = "PROXY 192.168.100.10:8080";
    var p2 = "PROXY 192.168.100.11:8080";
    var failover = p1 + "; " + p2 + "; DIRECT";

    host = host.toLowerCase();

    if (dnsDomainIs(host, "zac.ai") || dnsDomainIs(host, "e-staffing.ne.jp")) {
        return failover;
    }

    return "DIRECT";
}
