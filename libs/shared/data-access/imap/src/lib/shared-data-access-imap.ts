import notifier from 'mail-notifier';

export function listen() {
  const imap = {
    user: 'qpsignals@hotmail.com',
    password: 'nE_VUbqJ:sj_GF5',
    host: 'outlook.office365.com',
    port: 993, // imap port
    tls: true, // use secure connection
    tlsOptions: { rejectUnauthorized: false },
  };

  const n: notifier.Notifier = notifier(imap)
    .on('end', () => n.start())
    .on('mail', (mail) => console.log(mail))
    .start();
}
