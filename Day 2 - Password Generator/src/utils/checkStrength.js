import zxcvbn from 'zxcvbn';

export function getStrength(password) {
    const analysis = zxcvbn(password);
    const ratings = ["VERY WEAK", "WEAK", "MEDIUM", "STRONG", "VERY STRONG"]
    
    return { score: analysis.score, rating: ratings[analysis.score] };
}