{
  "dependencies": {
    "@types/react": "^16.8.18",
    "@types/react-dom": "^16.8.4",
    "@types/react-redux": "^7.0.9",
    "@types/react-router-dom": "^4.3.3",
    "@types/react-swipe": "^6.0.0",
    "@types/react-transition-group": "^2.9.1",
    "@types/redux-logger": "^3.0.7",
    "connected-react-router": "^6.4.0",
    "react": "^16.8.6",
    "react-dom": "^16.8.6",
    "react-redux": "^7.0.3",
    "react-router-dom": "^5.0.0",
    "react-swipe": "^6.0.4",
    "react-transition-group": "^4.0.1",
    "redux": "^4.0.1",
    "redux-logger": "^3.0.6",
    "redux-thunk": "^2.3.0"
  },
  "devDependencies": {
    "@types/enzyme": "^3.9.3",
    "@types/enzyme-adapter-react-16": "^1.0.5",
    "@types/jest": "^24.0.13",
    "@typescript-eslint/eslint-plugin": "^1.9.0",
    "@typescript-eslint/parser": "^1.9.0",
    "enzyme": "^3.9.0",
    "enzyme-adapter-react-16": "^1.13.1",
    "eslint": "^5.16.0",
    "html-webpack-plugin": "^3.2.0",
    "jest": "^24.8.0",
    "pre-commit": "^1.2.2",
    "source-map-loader": "^0.2.4",
    "ts-jest": "^24.0.2",
    "ts-loader": "^6.0.1",
    "typescript": "^3.4.5",
    "webpack": "^4.32.2",
    "webpack-cli": "^3.3.2",
    "webpack-dev-server": "^3.4.1"
  },
  "scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server",
    "eslint": "eslint src --ext .tsx",
    "eslint:fix": "eslint src --ext .tsx --fix",
    "test":"jest"
  },
  "jest":{
    "moduleFileExtensions":[
      "js","ts","tsx"
    ],
    "transform":{  // 换换规则
      "^.+\\.tsx$":"ts-jest"
    },
    "testMatch":[ // 测试的文件规则：<rootDir>( 根目录下的) **(任意目录) 的 (spec|test) .tsx文件
      "<rootDir>/test/**/*.(spec|test).tsx"
    ]
  },
  "pre-commit": [  // 用git提交代码时，会根据配置项进行代码检测，通过了才提交
    "eslint"
  ]
}
