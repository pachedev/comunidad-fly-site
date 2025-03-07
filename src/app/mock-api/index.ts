import { inject, Injectable } from '@angular/core';
import { HelpCenterMockApi } from 'app/mock-api/apps/help-center/api';
import { AuthMockApi } from 'app/mock-api/common/auth/api';
import { MessagesMockApi } from 'app/mock-api/common/messages/api';
import { NavigationMockApi } from 'app/mock-api/common/navigation/api';
import { NotificationsMockApi } from 'app/mock-api/common/notifications/api';
import { SearchMockApi } from 'app/mock-api/common/search/api';
import { ShortcutsMockApi } from 'app/mock-api/common/shortcuts/api';
import { UserMockApi } from 'app/mock-api/common/user/api';

@Injectable({ providedIn: 'root' })
export class MockApiService {
    authMockApi = inject(AuthMockApi);
    helpCenterMockApi = inject(HelpCenterMockApi);
    messagesMockApi = inject(MessagesMockApi);
    navigationMockApi = inject(NavigationMockApi);
    notificationsMockApi = inject(NotificationsMockApi);
    searchMockApi = inject(SearchMockApi);
    shortcutsMockApi = inject(ShortcutsMockApi);
    userMockApi = inject(UserMockApi);
}
