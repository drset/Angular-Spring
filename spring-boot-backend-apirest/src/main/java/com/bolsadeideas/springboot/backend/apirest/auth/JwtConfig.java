/**
 * 
 */
package com.bolsadeideas.springboot.backend.apirest.auth;

/**
 * @author SET
 *
 */
public class JwtConfig {
	public static final String LLAVE_SECRETA= "alguna.clave.secreta.12345678";
	
	public static final String RSA_PRIVADA = "-----BEGIN RSA PRIVATE KEY-----\r\n" + 
			"MIIEowIBAAKCAQEAvO71Uh0dFMy8Z0tMtxqYEQsxpPzpFsbb3M8kdOpPPGyffctW\r\n" + 
			"oJz1iUz9Kopu/oMUxz+0ocrCFzJtF1oZkZYZ5ctiptE/Me5fmqml1752+N1Xu2zy\r\n" + 
			"1gUvsF3yJZTHunhEvz0W12wdm4lOnZCWdBcGaSW850GiBM9j7jmg8O+xjKfnUnhB\r\n" + 
			"aTZYMGiNq/TvFCG26IWFW0PXiORMm46Vruavd/YHul9HvMDkOBKxU+tJLlKq3BmG\r\n" + 
			"6KX/vJcZyxAeMrhLhWpfT2B/W289DAegD80DReKqSJU8klZuEjzx94agfB/R6PH6\r\n" + 
			"BR4HphMjptcCOhyfKg2IGzoMMM9cmQj2KNkYFQIDAQABAoIBAF56zNkMUA+ntoud\r\n" + 
			"HzbtqJ/VTjUoeFN4jFgmih+hUJBx7WwVtDNLaooHow6T/Z9u44QkOmsyHs9E20Lz\r\n" + 
			"PpgMTNUaWTH8r7KDdvG75oA18f7PiWDjwaf/HfL/d+kNNrfsDsznerWtjjzKdDLd\r\n" + 
			"LC/Pl9gbFBU9QA1RvLJTxUTXSJ2COIAnDBfVZYDeUcgXYkNkEhLS+pLZsupfG8y4\r\n" + 
			"RePXraqLnocsqkPQcSlmGdB/74/h4vqmz1J5Ha3tushvU5MVqQ1ANTFcpEk39KwL\r\n" + 
			"fLpQZbzXMqbZHtuwvecEFmmIZlE0i+wQ3Vwk71lUU+b8DU8FDzMByQIqoJZn70oG\r\n" + 
			"qjr8Tn0CgYEA8Zpxh6kAfafYS6ZwZpDxlThi3R3rPtaVMrnRywFlVNVHgLeTa7o7\r\n" + 
			"6GQvw1iOwGdKSnB8h30/fiErD/gZKGUtvOZ/5Uv9SxzXAr3c5AGC36WG3Pl2B3Fy\r\n" + 
			"P4Kql33oMiIMtYvqevyD5NmIlkpKi7I0AkJJMzw+NoOwJE1pUmIZCpcCgYEAyDEO\r\n" + 
			"5vCu+yDCqsCa5O4HSlrB4zliNMoSH+vYQGKtI+hfO/Yj97B6xkZL73QaUT2Q2V3P\r\n" + 
			"9Xs5AxRGf94GTy86RXvzUsfH3QRIBag45fUM3+qHCKK2Zc9eKpw14TsdP7Kv6/ux\r\n" + 
			"uYhMjtfKwmPaROe0IoRqPlv1rmiW2jtgXbwvZDMCgYEAxltUhlp8aq3Y6RM3CR5L\r\n" + 
			"GYX3tS6RK0AlskXZNmBo/2Mzlzwgrrtx3/QROsKEQPcMiV0dAGgWLsmwfyXkEcQv\r\n" + 
			"7v0XV/wxcu+0ny2eIxwShOdzeAzfmHDNqdLvl/zpG+/Um2DKHDshVkw61Zkc5uBh\r\n" + 
			"ztD5JDV7pmorvUJJDDg58vUCgYB59NEERboDyShuh5mVP6D3XiTh/VJjoHq8MZxz\r\n" + 
			"VOnvhx+FUuUEfuG8qpSWEt/5gA0fLrSC8wd/ZbmxKhwj3zybmfBZDNYoQfRyZdIL\r\n" + 
			"3WZzfte2nhGKInNWeAWm6bFe3ceodpQF2A/zsWiXVedhtNobcRmcVb9s+dB0sFl7\r\n" + 
			"oSop2wKBgHM3Nag1cJfMAFcH24dbHL07x5W5K+iqnfgxscmKvn2Ce3UKyB6MPAlq\r\n" + 
			"OrnwzreXCa5pD0QMShdncs7XL1VR+Ujs0z8PYCghlhzyNbWZruCjbd/rXTDRupWS\r\n" + 
			"1mfRhHavJ6i9umCtzxh9EWfksrcA+ibxoWNiY+7x8XnBzmKCkfKH\r\n" + 
			"-----END RSA PRIVATE KEY-----";
	
	public static final String RSA_PUBLICA = "-----BEGIN PUBLIC KEY-----\r\n" + 
			"MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvO71Uh0dFMy8Z0tMtxqY\r\n" + 
			"EQsxpPzpFsbb3M8kdOpPPGyffctWoJz1iUz9Kopu/oMUxz+0ocrCFzJtF1oZkZYZ\r\n" + 
			"5ctiptE/Me5fmqml1752+N1Xu2zy1gUvsF3yJZTHunhEvz0W12wdm4lOnZCWdBcG\r\n" + 
			"aSW850GiBM9j7jmg8O+xjKfnUnhBaTZYMGiNq/TvFCG26IWFW0PXiORMm46Vruav\r\n" + 
			"d/YHul9HvMDkOBKxU+tJLlKq3BmG6KX/vJcZyxAeMrhLhWpfT2B/W289DAegD80D\r\n" + 
			"ReKqSJU8klZuEjzx94agfB/R6PH6BR4HphMjptcCOhyfKg2IGzoMMM9cmQj2KNkY\r\n" + 
			"FQIDAQAB\r\n" + 
			"-----END PUBLIC KEY-----";
	
}//end Class
