import crypto from 'crypto';

const secretKey: string = process.env.SECRET_KEY || "wdHO$>*bVc>J]";
export function generateToken(path: string): string {
    const timestamp = Math.floor(Date.now() / 1000);
    const data = `${timestamp}|${path}`;
    const hmac = crypto.createHmac('sha256', secretKey);

    hmac.update(data);
    const token = hmac.digest('hex');

    return Buffer.from(`${timestamp}|${token}`).toString('base64');
}
