/* eslint-disable react/no-unescaped-entities */
type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
};

export default function ContactFormEmail({
    message,
    senderEmail,
}: ContactFormEmailProps) {
    return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>Mail from ${senderEmail}</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}	
		</style>
	
	</head>
	
	<body>
		<div class="container">
			<div class="message">Mail from portfolio</div>
			<div class="body">
				<p>Dear Vishal,</p>
				<p>${message}</p>
				
			</div>
			
	</body>
	
	</html>`;
}
