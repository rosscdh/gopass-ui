export interface SecretIconMapping {
    regex: RegExp
    icon: string
}

export const passwordSecretRegex: RegExp = /(password|secret|key|passphrase|certificate)/
const secretIconMappings: SecretIconMapping[] = [
    {
        regex: passwordSecretRegex,
        icon: 'lock'
    },
    {
        regex: /(user|name|id)/,
        icon: 'person'
    },
    {
        regex: /(note|comment|misc)/,
        icon: 'comment'
    },
    {
        regex: /(uri|url|link|connection)/,
        icon: 'filter_center_focus'
    }
]

export const deriveSecretIcon = (secretName: string) => {
    let iconType = 'comment'

    secretIconMappings.forEach((mapping: SecretIconMapping) => {
        const hasIconMapping = mapping.regex.test(secretName)

        if (hasIconMapping) {
            iconType = mapping.icon
        }
    })

    return iconType
}

export default secretIconMappings