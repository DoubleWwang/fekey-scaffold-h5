// 每种 scaffold 配置文件
module.exports = {
    'info': 'create a new project in h5',
    'config': {
        'type': 'github',
        'needApp': true,
        'path': '/h5',
        'allowCustom': true,
        'customPath': 'tpl',
        keyword_reg: '',
        'prompt': [{
            name: 'project_name',
            description: 'Enter your h5 project name',
            type: 'string',
            required: true,
            default: 'game2'
        }, {
            name: 'type_name',
            description: 'Enter h5 project type (app | huodong)',
            type: 'string',
            required: true,
            default: 'huodong'
        }],
        'property': [{
            name: 'lower_project_name',
            from: 'project_name',
            calc: function(project_name) {
                return project_name.replace(/^(\w)/, function(v) {
                    return v.toUpperCase(); // todo
                });
            }
        }],
        'roadmap': [
        ]
    }
};
